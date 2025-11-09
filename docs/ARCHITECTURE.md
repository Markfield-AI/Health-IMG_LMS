# System Architecture

## Overview

The NHS Cultural Competency Training Application is a full-stack TypeScript application built on a modern React + Express architecture, designed for scalability, maintainability, and educational effectiveness.

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Client Layer                         │
│  React + TypeScript + Vite + TanStack Query + Tailwind CSS  │
│                    (Port 5000 - served by Vite)             │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       │ HTTP/JSON API
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                       Server Layer                           │
│           Express.js + TypeScript + OpenAI                   │
│                      (Port 5000)                             │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                     Data Layer                               │
│   In-Memory Storage (MemStorage) / Future: PostgreSQL       │
└─────────────────────────────────────────────────────────────┘
```

## Frontend Architecture

### Component Hierarchy

```
App.tsx
├── ThemeProvider (light/dark mode)
├── QueryClientProvider (TanStack Query)
└── Router (Wouter)
    ├── Training.tsx (Main training page)
    │   ├── TrainingAvatar.tsx (Avatar with TTS)
    │   ├── ModuleCard.tsx (Module selection cards)
    │   ├── ScenarioCard.tsx (Scenario display)
    │   ├── QuestionOptions.tsx (Multiple choice UI)
    │   └── ProgressTracker.tsx (Progress visualization)
    └── NotFound.tsx (404 page)
```

### State Management Strategy

**Server State** (TanStack Query):
- Session data (`/api/session`)
- Scenario generation (`/api/scenario/generate`)
- Answer submissions (`/api/scenario/submit`)

**Local State** (React useState):
- UI interactions (selected answer, show feedback)
- Scenario counter and module tracking
- Completed scenarios tracking
- Welcome screen visibility

**Rationale**: Server state is managed by TanStack Query for caching, background refetching, and optimistic updates. Local UI state is managed by React hooks for simplicity and performance.

### Data Flow

1. **User selects module** → `POST /api/session` → Session created
2. **Generate scenario** → `POST /api/scenario/generate` → Scenario returned (AI or mock)
3. **User submits answer** → `POST /api/scenario/submit` → Validation and feedback
4. **Progress tracking** → Local state + completed scenarios array
5. **Module completion** → Check if 10/10 scenarios completed → Display badge

## Backend Architecture

### API Design Principles

- **RESTful JSON API**: Clear resource-based endpoints
- **Stateless requests**: Session data stored in memory (future: PostgreSQL)
- **Error handling**: Graceful degradation with fallback scenarios
- **Validation**: Zod schemas for request/response validation

### Storage Architecture

**Current**: In-Memory Storage (MemStorage class)

```typescript
interface IStorage {
  // Session management
  createSession(): Promise<SessionRecord>;
  getSession(sessionId: string): Promise<SessionRecord | undefined>;
  
  // User data (prepared for future auth)
  getUserByUsername(username: string): Promise<User | undefined>;
}
```

**Future**: PostgreSQL with Drizzle ORM

The storage interface is designed to be storage-agnostic, allowing seamless migration to PostgreSQL when persistence is required.

### Scenario Generation Strategy

```typescript
if (OPENAI_API_KEY available) {
  → Generate scenario using OpenAI API
  → Use TRAINING_SYSTEM_PROMPT for context
  → Structured JSON output
} else {
  → Use getMockScenarioByModule()
  → Cycle through 40 comprehensive scenarios
  → Ensure module rotation for variety
}
```

### Content Management

**Training Content**: Embedded as comprehensive system prompt containing all four modules of NHS cultural competency material.

**Mock Scenarios**: 40 hand-crafted scenarios (10 per module) stored in `shared/mockScenarios.ts` with:
- Realistic clinical scenarios
- Multiple-choice options
- Correct answers
- Detailed rationales with GMC and NHS references

## Shared Type System

All types are defined in `shared/schema.ts` using:
- **Drizzle ORM** for database schemas
- **Zod** for runtime validation
- **TypeScript** for compile-time safety

```typescript
// Example: Scenario type
export const scenarioSchema = z.object({
  module: z.string(),
  moduleNumber: z.number(),
  scenario_title: z.string(),
  scenario_text: z.string(),
  question: z.string(),
  options: z.object({
    A: z.string(),
    B: z.string(),
    C: z.string(),
    D: z.string(),
  }),
  correct_answer: z.enum(["A", "B", "C", "D"]),
  rationale: z.string(),
});
```

## External Dependencies

### OpenAI Integration

- **Purpose**: Dynamic scenario generation
- **Lazy initialization**: Only initialized when API key available
- **Fallback behavior**: Graceful degradation to mock scenarios
- **Prompt engineering**: Comprehensive system prompt with NHS/GMC guidelines

### Web Speech API

- **Browser API**: No external dependencies
- **Configuration**: UK English female voice at 1.2x speed
- **Fallback**: Text display if speech API unavailable
- **User control**: Toggle speech on/off

## Security Considerations

### Session Management

- Session IDs generated using UUIDs
- Sessions stored in-memory (future: PostgreSQL with encryption)
- No sensitive data in sessions currently

### API Security

- Input validation using Zod schemas
- Error messages don't leak sensitive information
- Rate limiting (to be implemented in production)

### Data Privacy

- No PII collected in current version
- Session data not persisted beyond server restart
- Future auth will follow GMC data protection standards

## Performance Optimizations

### Frontend

- **Code splitting**: Vite automatic code splitting
- **React Query caching**: Reduce redundant API calls
- **Image optimization**: Avatar images optimized for web
- **Lazy loading**: Components loaded on demand

### Backend

- **In-memory storage**: Fast read/write operations
- **OpenAI caching**: Consider response caching (future enhancement)
- **Minimal dependencies**: Fast startup and low memory footprint

## Scalability Considerations

### Current Limitations

- In-memory storage limits horizontal scaling
- No distributed session management
- Single-instance deployment

### Future Enhancements

1. **Database Migration**: Move to PostgreSQL for persistence
2. **Session Store**: Use connect-pg-simple for session management
3. **Load Balancing**: Support multiple server instances
4. **CDN Integration**: Serve static assets via CDN
5. **Caching Layer**: Redis for scenario caching

## Monitoring and Logging

### Current Logging

- Express access logs
- Error logging to console
- Client-side error boundaries

### Future Monitoring

- Application performance monitoring (APM)
- Error tracking (e.g., Sentry)
- Analytics for training completion rates
- GMC-compliant audit logs

## Development Workflow

### Local Development

1. **Hot Module Replacement (HMR)**: Vite provides instant feedback
2. **TypeScript checking**: Compile-time error detection
3. **Shared types**: Consistency between frontend and backend
4. **Mock scenarios**: Development without OpenAI API key

### Build Process

```bash
npm run dev      # Development with HMR
npm run build    # Production build
npm run preview  # Preview production build
```

### Deployment Pipeline

1. TypeScript compilation
2. Vite build (bundling, minification, tree-shaking)
3. Asset optimization
4. Environment variable injection
5. Health check validation

## Technology Choices and Rationale

### Why React?

- Component reusability
- Large ecosystem and community
- TypeScript integration
- Accessibility support via Radix UI

### Why Express?

- Simplicity and flexibility
- Middleware ecosystem
- TypeScript support
- Easy integration with Vite

### Why Vite?

- Fast HMR during development
- Optimized production builds
- Built-in TypeScript support
- Modern ESM-based architecture

### Why TanStack Query?

- Declarative data fetching
- Automatic caching and background updates
- Optimistic UI updates
- Reduces boilerplate code

### Why Tailwind CSS + shadcn/ui?

- Utility-first CSS for rapid development
- Consistent design system
- Accessible Radix UI primitives
- Dark mode support out of the box

## Migration Path to PostgreSQL

### Current State: In-Memory

```typescript
class MemStorage implements IStorage {
  private sessions: Map<string, SessionRecord> = new Map();
  private users: Map<string, User> = new Map();
}
```

### Future State: PostgreSQL + Drizzle

```typescript
// Schema already defined in shared/schema.ts
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").unique().notNull(),
  password: text("password").notNull(),
});

export const sessions = pgTable("sessions", {
  id: text("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
});

// Implementation
class PgStorage implements IStorage {
  constructor(private db: PostgresJsDatabase) {}
  
  async createSession() {
    return await this.db.insert(sessions).values({...}).returning();
  }
}
```

### Migration Steps

1. Set up PostgreSQL database
2. Run Drizzle migrations
3. Switch storage implementation
4. Update session middleware to use connect-pg-simple
5. Test data persistence
6. Deploy with database connection pooling

## Directory Structure Explained

```
├── attached_assets/       # Static assets (images, audio)
│   ├── generated_images/  # AI-generated avatar images
│   └── ...
│
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   │   ├── ui/       # shadcn/ui components
│   │   │   ├── TrainingAvatar.tsx
│   │   │   ├── ModuleCard.tsx
│   │   │   └── ...
│   │   ├── pages/        # Page-level components
│   │   │   ├── Training.tsx
│   │   │   └── NotFound.tsx
│   │   ├── lib/          # Utilities and configurations
│   │   │   ├── queryClient.ts
│   │   │   └── mockScenarios.ts
│   │   ├── App.tsx       # Root application component
│   │   ├── main.tsx      # Application entry point
│   │   └── index.css     # Global styles + Tailwind
│
├── server/               # Backend Express application
│   ├── routes.ts         # API route handlers
│   ├── storage.ts        # Storage interface and implementation
│   ├── training-content.ts  # Training curriculum prompt
│   ├── vite.ts           # Vite middleware integration
│   └── index.ts          # Server entry point
│
├── shared/               # Shared between client and server
│   ├── schema.ts         # TypeScript types + Zod schemas
│   └── mockScenarios.ts  # 40 training scenarios with GMC references
│
├── docs/                 # Technical documentation
│   ├── ARCHITECTURE.md   # This file
│   ├── API.md           # API documentation
│   └── DEPLOYMENT.md    # Deployment guide
│
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── drizzle.config.ts    # Drizzle ORM configuration
└── package.json         # Dependencies and scripts
```

## Design Patterns

### Repository Pattern

The `IStorage` interface implements the repository pattern, abstracting data access:

```typescript
interface IStorage {
  createSession(): Promise<SessionRecord>;
  getSession(id: string): Promise<SessionRecord | undefined>;
  // ... more methods
}
```

Benefits:
- Easy to swap implementations (MemStorage → PgStorage)
- Testable (mock storage for unit tests)
- Consistent API regardless of underlying storage

### Factory Pattern

Scenario generation uses factory pattern:

```typescript
function getScenario(module: number, index: number): Scenario {
  if (hasOpenAI()) {
    return await generateAIScenario(module);
  } else {
    return getMockScenarioByModule(module, index);
  }
}
```

### Observer Pattern

TanStack Query implements observer pattern for server state:

```typescript
const { data, isLoading } = useQuery({
  queryKey: ['/api/session'],
  // Automatically re-fetches and notifies components
});
```

## Testing Strategy

### Unit Tests

- Component testing with React Testing Library
- API route testing with Supertest
- Storage implementation testing

### Integration Tests

- End-to-end user flows
- API contract testing
- Database migration testing (future)

### E2E Tests

- Playwright for browser automation
- Critical user paths (select module → answer question → complete module)
- Accessibility testing

## Future Architecture Considerations

### Microservices Potential

Current monolith could be split into:

1. **API Service**: Express routes and business logic
2. **Content Service**: Scenario generation and management
3. **Analytics Service**: Progress tracking and reporting
4. **Auth Service**: User authentication and authorization

### Real-Time Features

Consider WebSockets for:
- Live progress updates
- Collaborative learning sessions
- Real-time leaderboards

### Offline Support

Progressive Web App (PWA) capabilities:
- Service workers for offline access
- IndexedDB for local scenario caching
- Background sync for progress updates

---

**Document Version**: 1.0.0  
**Last Updated**: 2024  
**Maintainer**: Development Team
