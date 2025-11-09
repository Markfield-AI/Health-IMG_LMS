# NHS Cultural Competency Training Application

An interactive web-based training platform for International Medical Graduates (IMGs) transitioning to the NHS, featuring AI-powered scenario-based learning with a talking avatar interface.

## Overview

This application delivers comprehensive cultural competency training across four core modules, helping IMGs understand and adapt to NHS professional culture, communication styles, patient sensitivity requirements, and professional standards.

### Key Features

- **Interactive Avatar Interface**: UK female voice (1.2x speed) delivers scenarios and feedback
- **40 Comprehensive Scenarios**: 10 scenarios per module covering all aspects of NHS cultural competency
- **GMC and NHS Authoritative References**: Every answer includes citations to GMC Good Medical Practice 2024, NHS Constitution, and relevant guidance
- **Progress Tracking**: Track completion across all 4 modules with visual progress indicators
- **Module Completion Badges**: Earn badges after completing all 10 scenarios in each module
- **AI-Powered Generation**: Optional OpenAI integration for dynamic scenario generation
- **Graceful Fallback**: Comprehensive mock scenarios when AI unavailable

### Training Modules

1. **Team Culture** - Navigating the non-hierarchical, multidisciplinary team environment
2. **Communication** - Mastering indirect British communication and structured frameworks (SBAR)
3. **Patient Sensitivity** - UK-specific ethical and legal considerations (Gillick competence, capacity, consent)
4. **Professional Integration** - GMC standards, social media, duty of candour, and professional conduct

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or compatible package manager
- (Optional) OpenAI API key for AI-powered scenario generation

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd nhs-training-app

# Install dependencies (handled automatically by Replit)
npm install
```

### Running the Application

```bash
# Start the development server (runs both backend and frontend)
npm run dev
```

The application will be available at `http://localhost:5000`

### Environment Variables

Create a `.env` file or set environment variables:

```bash
# Required
SESSION_SECRET=your-session-secret-here

# Optional - for AI-powered scenario generation
OPENAI_API_KEY=your-openai-api-key-here
```

**Note**: The application works fully without an OpenAI API key, using 40 pre-built comprehensive scenarios.

## Project Structure

```
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/    # UI components (Avatar, ModuleCard, etc.)
│   │   ├── pages/         # Page components (Training, NotFound)
│   │   ├── lib/           # Client utilities and API configuration
│   │   └── App.tsx        # Main application component
│
├── server/                # Express backend
│   ├── routes.ts          # API endpoints
│   ├── storage.ts         # Data storage interface
│   ├── training-content.ts # Training curriculum content
│   └── index.ts           # Server entry point
│
├── shared/                # Shared types and data
│   ├── schema.ts          # TypeScript types and Zod schemas
│   └── mockScenarios.ts   # 40 comprehensive training scenarios
│
└── docs/                  # Technical documentation
    ├── ARCHITECTURE.md    # System architecture overview
    ├── API.md            # API documentation
    └── DEPLOYMENT.md     # Deployment guide
```

## Usage

### For Learners

1. **Start Training**: Select a module from the main menu
2. **Read Scenario**: Listen to or read the clinical scenario
3. **Answer Question**: Choose from multiple-choice options
4. **Receive Feedback**: Get immediate feedback with GMC/NHS references
5. **Track Progress**: Monitor completion across all modules
6. **Earn Badges**: Complete all 10 scenarios in a module to earn a completion badge

### For Developers

See detailed documentation in the `docs/` folder:

- [Architecture Guide](./docs/ARCHITECTURE.md) - System design and technical decisions
- [API Documentation](./docs/API.md) - Backend API endpoints and data contracts
- [Deployment Guide](./docs/DEPLOYMENT.md) - Production deployment instructions

## Technology Stack

### Frontend
- **React** with TypeScript
- **Vite** for build tooling
- **Wouter** for routing
- **TanStack Query** for server state management
- **Tailwind CSS** + **shadcn/ui** for styling
- **Radix UI** for accessible components
- **Web Speech API** for text-to-speech

### Backend
- **Express.js** with TypeScript
- **OpenAI API** (optional) for AI scenario generation
- **In-memory storage** (MemStorage)
- **Drizzle ORM** (configured for future PostgreSQL migration)

## Key Features in Detail

### GMC and Authoritative References

Every scenario answer includes:
- **GMC Good Medical Practice 2024** citations (with specific domains)
- **NHS Constitution** principles
- **Specific GMC Guidance** documents (e.g., Gillick Competence, Social Media Guidance)
- **UK Legislation** references (Mental Capacity Act, Equality Act, etc.)
- **NHS Frameworks** (Patient Safety, SBAR, Freedom to Speak Up)

### Scenario Coverage

The 40 scenarios cover:
- MDT collaboration and professional parity
- Indirect British communication styles
- SBAR structured communication
- Teach-back method and patient-centered language
- Gillick competence and Fraser guidelines
- Mental Capacity Act applications
- Cultural and religious sensitivity
- End-of-life care practices
- GMC social media and confidentiality standards
- Duty of candour and raising concerns
- Professional boundaries and probity
- Research ethics and informed consent

### Accessibility

- Text-to-speech with UK female voice
- Clear visual progress indicators
- Responsive design for mobile and desktop
- High-contrast UI elements
- Keyboard navigation support

## Development

### Running Tests

```bash
# Run unit tests
npm test

# Run E2E tests
npm run test:e2e
```

### Building for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

### Code Quality

```bash
# Type checking
npm run typecheck

# Linting
npm run lint
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Copyright © 2024. All rights reserved.

## Acknowledgments

- **GMC** for Good Medical Practice 2024 guidance
- **NHS England** for Patient Safety frameworks and SBAR guidance
- **National Guardian's Office** for Freedom to Speak Up framework
- **AHRQ** for Health Literacy and Teach-Back method research

## Support

For technical issues or questions:
- Review the [documentation](./docs/)
- Check the [API reference](./docs/API.md)
- Consult the [architecture guide](./docs/ARCHITECTURE.md)

## Version History

- **v1.0.0** (Current)
  - 40 comprehensive scenarios with GMC/NHS references
  - Module completion badges
  - AI-powered scenario generation (optional)
  - Full progress tracking system
  - Accessible talking avatar interface

---

**Built for International Medical Graduates transitioning to NHS practice**
