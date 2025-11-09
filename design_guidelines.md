# NHS Cultural Competency Training - Design Guidelines

## Design Approach

**System Foundation**: Material Design principles with healthcare-appropriate modifications
**Reference Inspiration**: LinkedIn Learning (professional education), Duolingo (progress gamification), NHS Digital design patterns (credibility)

**Core Principle**: Create a trustworthy, professional learning environment that balances engagement with clinical seriousness. This is medical education, not entertainment—the interface should inspire confidence while maintaining approachability.

## Typography

**Primary Font**: Inter or Roboto (professional, highly legible)
**Secondary Font**: System serif for avatar dialogue bubbles to create conversational warmth

**Hierarchy**:
- Module titles: text-3xl, font-bold
- Scenario titles: text-2xl, font-semibold  
- Scenario content: text-lg, leading-relaxed
- Questions: text-xl, font-medium
- Options: text-base
- Rationale/feedback: text-base, leading-relaxed
- UI labels: text-sm, font-medium

## Layout System

**Spacing Units**: Tailwind spacing of 4, 6, 8, 12, 16, 20, 24 (consistent rhythm)

**Grid Structure**:
- Two-column desktop layout: Avatar panel (fixed left, w-96) + Content area (flex-1 right)
- Mobile: Single column stack with avatar collapsible at top
- Max content width: max-w-4xl for readability
- Container padding: px-6 md:px-8 lg:px-12

## Component Library

### Avatar Panel (Left Sidebar - Desktop)
- Fixed position, full height
- Avatar visualization at top (circular frame, 256x256)
- Speech bubble below avatar for scenario narration
- Module selector chips below speech area
- Progress indicator at bottom showing scenarios completed

### Main Content Area
**Scenario Card**:
- Elevated card with rounded-2xl
- Module badge at top (small pill showing "Module 3: Patient Sensitivity")
- Scenario title (prominent)
- Scenario text in comfortable reading width (max-w-prose)
- Clear visual separation before question section

**Question Section**:
- Question text in distinct container with subtle background differentiation
- Four option cards arranged vertically with generous spacing (space-y-4)
- Each option: Interactive card with letter label (A, B, C, D) + option text
- Hover state: subtle elevation and border emphasis
- Selected state: stronger border, slight background shift

**Feedback Panel** (appears after answer):
- Full-width banner above question
- Icon indicator (checkmark/X) + "Correct" or "Incorrect" label
- Detailed rationale text
- "Next Scenario" button prominently placed

### Navigation & Progress
**Top Bar**:
- NHS logo/branding left
- Current module indicator center
- Progress metrics right (X/Y scenarios completed)

**Module Navigation**:
- Four module cards/tabs showing:
  - Module number and title
  - Icon representing module theme
  - Completion count
  - Visual indicator for current module

### Buttons
**Primary Actions** (Submit Answer, Next Scenario):
- Large touch targets (h-12 md:h-14)
- Full rounded corners (rounded-full)
- Clear label with optional icon

**Secondary Actions** (Module selection):
- Outlined style
- Medium size (h-10)

### Progress Visualization
- Linear progress bar showing overall completion
- Module-specific progress rings or bars
- Badge system for module completion
- Visual celebration on module completion (subtle confetti or checkmark animation)

## Avatar Integration

**Avatar Display**:
- Circular frame with professional headshot or illustrated character
- Subtle pulse animation when "speaking" (presenting scenario)
- Static when waiting for user response

**Speech Presentation**:
- Dialogue-style bubble emanating from avatar
- Typewriter effect for scenario text (optional, can be instant)
- Clear visual distinction between avatar narration and question content

## State Management Visual Feedback

**Scenario States**:
- Loading: Skeleton screens with subtle animation
- Reading: Clean, distraction-free presentation
- Answering: Options interactive and clearly selectable
- Feedback: Answer revealed, correct option highlighted, rationale displayed
- Completed: Checkmark overlay, ready for next

**Visual Indicators**:
- Unanswered questions: Neutral state
- Correct answer: Success treatment (green accent, checkmark)
- Incorrect answer: Error treatment (red accent, X) but non-punitive tone
- Correct option reveal: Highlighted regardless of user's choice

## Accessibility & Usability

**Interaction Design**:
- Keyboard navigation fully supported
- Focus states clearly visible with 2px outline
- Touch targets minimum 44x44px
- Screen reader announcements for state changes
- High contrast mode support

**Reading Experience**:
- Optimal line length for scenario text (65-75 characters)
- Comfortable line-height (1.6-1.8)
- Clear visual hierarchy prevents cognitive overload
- Option to adjust text size

## Professional Medical Context

**Visual Tone**:
- Clean, uncluttered interfaces inspire confidence
- Avoid overly playful elements—this is professional development
- Use medical-appropriate imagery (stethoscope icons, hospital imagery sparingly)
- NHS blue as accent (trustworthy, recognizable)

**Credibility Markers**:
- GMC/NHS branding elements
- "Based on GMC Guidelines" badges where relevant
- Professional photography over illustrations for hero/branding

## Images

**Hero Section** (Welcome/Landing Screen):
- Large hero image (h-96) showing diverse NHS medical team in collaborative setting
- Image should convey: professionalism, diversity, teamwork, modern NHS environment
- Overlaid: Welcome message + "Begin Training" CTA with blurred background button

**Avatar Image**:
- Professional headshot of friendly medical educator OR
- Illustrated character representing diverse NHS workforce
- Should appear approachable, trustworthy, professional

**Module Icons/Images**:
- Each module card includes relevant iconography or small imagery:
  - Module 1: Team collaboration icon/image
  - Module 2: Communication bubbles/discussion
  - Module 3: Patient care/sensitivity
  - Module 4: Professional development/resilience

No other imagery needed—focus on content clarity over visual decoration.

## Animation Guidelines

**Minimal, Purposeful Motion**:
- Avatar subtle pulse when presenting (2s ease-in-out cycle)
- Smooth transitions between scenarios (300ms ease)
- Progress bar fill animation (celebrate milestones)
- Feedback panel slide-in (200ms)
- NO distracting background animations
- NO carousel auto-play

## Mobile Responsive Adaptations

- Avatar panel becomes collapsible drawer at top
- Speech bubble appears above content, can be minimized
- Options remain stacked vertical (no columns)
- Reduced spacing (py-12 instead of py-20)
- Sticky progress bar at top
- Module navigation converts to horizontal scrollable tabs