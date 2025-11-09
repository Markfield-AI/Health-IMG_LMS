# NHS Cultural Competency Training Application

## Overview

An interactive web-based training platform designed for International Medical Graduates (IMGs) transitioning to the NHS. The application delivers scenario-based cultural competency training through a talking avatar interface, covering team dynamics, communication styles, patient sensitivity, and professional integration. Users engage with realistic clinical scenarios, answer multiple-choice questions, and receive immediate educational feedback.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript, built using Vite for fast development and optimized production builds.

**UI Component System**: Radix UI primitives styled with Tailwind CSS following the shadcn/ui "new-york" design pattern. Components use a consistent design token system with CSS variables for theming (supports light/dark modes).

**Design Philosophy**: Material Design principles adapted for healthcare education, balancing professional credibility with engaging learning experiences. Layout follows a two-column desktop pattern (avatar panel + content area) that collapses to single-column on mobile.

**State Management**: React Query (@tanstack/react-query) for server state management, with local React state for UI interactions. Session data and scenario progress are managed through API endpoints.

**Routing**: Wouter for lightweight client-side routing. Currently single-page application with potential for expansion.

**Key Features**:
- Interactive avatar with optional text-to-speech using Web Speech API (UK female voice, 1.2x speed, natural pitch)
- Progress tracking across four training modules with completion badges
- Module completion badges displaying module name when all scenarios are completed
- Back to Main Menu navigation from active scenarios
- Real-time scenario generation and answer validation
- Automatic module rotation to ensure question variety
- Fallback to mock scenarios when AI service unavailable

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**API Design**: RESTful JSON API with clear separation of concerns:
- Session management endpoints (`/api/session`)
- Scenario generation via OpenAI integration (`/api/scenario/generate`)
- Answer submission and validation (`/api/scenario/submit`)

**Data Storage Strategy**: In-memory storage implementation (MemStorage class) for sessions and user data. Architecture designed to be storage-agnostic with IStorage interface, allowing future migration to PostgreSQL with Drizzle ORM (configuration already present).

**Content Management**: Training content embedded as comprehensive system prompt (TRAINING_SYSTEM_PROMPT) containing all four modules of NHS cultural competency material. This ensures AI-generated scenarios align with curriculum objectives.

**Error Handling**: Graceful degradation pattern - when OpenAI API unavailable, application falls back to pre-defined mock scenarios to ensure continuity of learning experience.

### External Dependencies

**AI Service**: OpenAI API for dynamic scenario generation. The system uses structured prompts to generate culturally appropriate medical scenarios with multiple-choice questions, correct answers, and educational rationales. Lazy initialization pattern ensures application runs even without API key (using fallback content).

**Database**: PostgreSQL configured via Drizzle ORM, though currently using in-memory storage. Database schema defined in `shared/schema.ts` with user authentication tables and session tracking prepared for future persistence requirements.

**Third-party UI Libraries**:
- Radix UI for accessible, unstyled component primitives
- Lucide React for consistent iconography
- Embla Carousel for potential content carousels
- CMDK for command palette functionality

**Development Tools**:
- Vite with HMR for development
- Replit-specific plugins for error overlay and dev banner
- TypeScript for type safety across full stack

**Session Management**: Currently in-memory with connect-pg-simple package installed for future PostgreSQL session store migration.

**Asset Management**: Static image assets stored in `attached_assets` directory, including generated avatar images and hero visuals. Vite configured with alias resolution for clean imports.