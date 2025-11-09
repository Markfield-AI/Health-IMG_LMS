# API Documentation

## Overview

The NHS Cultural Competency Training Application exposes a RESTful JSON API for managing training sessions, generating scenarios, and submitting answers.

## Base URL

```
http://localhost:5000/api
```

## Authentication

Currently, the API does not require authentication. Sessions are managed via session IDs.

**Future**: Will implement JWT-based authentication for user accounts.

## Common Response Codes

| Code | Description |
|------|-------------|
| 200  | Success |
| 201  | Created |
| 400  | Bad Request (validation error) |
| 404  | Not Found |
| 500  | Internal Server Error |

## Error Response Format

```json
{
  "error": "Error message describing what went wrong"
}
```

---

## Endpoints

### 1. Create Session

Creates a new training session.

**Endpoint**: `POST /api/session`

**Request Body**: None

**Response**: `201 Created`

```json
{
  "sessionId": "uuid-string",
  "createdAt": "2024-01-15T10:30:00.000Z"
}
```

**Example**:

```bash
curl -X POST http://localhost:5000/api/session \
  -H "Content-Type: application/json"
```

**Response**:

```json
{
  "sessionId": "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
  "createdAt": "2024-01-15T10:30:00.000Z"
}
```

---

### 2. Generate Scenario

Generates a new training scenario for a specific module.

**Endpoint**: `POST /api/scenario/generate`

**Request Body**:

```json
{
  "moduleNumber": 1,
  "scenarioIndex": 0
}
```

**Request Parameters**:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `moduleNumber` | number | Yes | Module number (1-4) |
| `scenarioIndex` | number | No | Index for scenario variation (0-9) |

**Module Numbers**:
- `1`: Team Culture
- `2`: Communication
- `3`: Patient Sensitivity
- `4`: Professional Integration

**Response**: `200 OK`

```json
{
  "module": "Module 1: Team Culture",
  "moduleNumber": 1,
  "scenario_title": "The Challenging Nurse",
  "scenario_text": "You are a new Foundation Doctor (FY1) on the ward. You prescribe a standard dose of a diuretic for a patient with fluid overload...",
  "question": "What is the most appropriate response in the NHS culture?",
  "options": {
    "A": "Politely tell the nurse that you are the doctor and your order stands...",
    "B": "Immediately change the dose to half, assuming the senior nurse knows best.",
    "C": "Thank the nurse for her input, state that you will review the patient's notes...",
    "D": "Ask the nurse to call the Registrar (senior doctor) to resolve the disagreement."
  },
  "correct_answer": "C",
  "rationale": "Excellent! This response perfectly demonstrates NHS MDT culture.\n\n**GMC Good Medical Practice 2024 - Domain 3...**"
}
```

**Error Cases**:

```json
// Invalid module number
{
  "error": "Invalid module number. Must be 1-4"
}
```

**Example**:

```bash
curl -X POST http://localhost:5000/api/scenario/generate \
  -H "Content-Type: application/json" \
  -d '{"moduleNumber": 1, "scenarioIndex": 0}'
```

**Behavior**:

- If `OPENAI_API_KEY` is available: Generates scenario using OpenAI API
- If `OPENAI_API_KEY` is not available: Returns mock scenario from pre-built library
- Scenarios rotate automatically based on `scenarioIndex`

---

### 3. Submit Answer

Submits and validates a user's answer to a scenario.

**Endpoint**: `POST /api/scenario/submit`

**Request Body**:

```json
{
  "selectedAnswer": "C",
  "correctAnswer": "C"
}
```

**Request Parameters**:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `selectedAnswer` | string | Yes | User's selected answer (A, B, C, or D) |
| `correctAnswer` | string | Yes | The correct answer for validation (A, B, C, or D) |

**Response**: `200 OK`

```json
{
  "isCorrect": true
}
```

**Validation**:

- Answers must be uppercase letters: A, B, C, or D
- Both `selectedAnswer` and `correctAnswer` are required

**Error Cases**:

```json
// Missing required fields
{
  "error": "selectedAnswer and correctAnswer are required"
}

// Invalid answer format
{
  "error": "Answers must be A, B, C, or D"
}
```

**Example**:

```bash
curl -X POST http://localhost:5000/api/scenario/submit \
  -H "Content-Type: application/json" \
  -d '{"selectedAnswer": "C", "correctAnswer": "C"}'
```

**Response**:

```json
{
  "isCorrect": true
}
```

---

## Data Types

### Scenario

```typescript
interface Scenario {
  module: string;              // e.g., "Module 1: Team Culture"
  moduleNumber: number;        // 1-4
  scenario_title: string;      // e.g., "The Challenging Nurse"
  scenario_text: string;       // Full scenario description
  question: string;            // Question text
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correct_answer: "A" | "B" | "C" | "D";
  rationale: string;           // Detailed explanation with GMC references
}
```

### Session

```typescript
interface SessionRecord {
  sessionId: string;           // UUID
  createdAt: Date;
}
```

---

## OpenAI Integration

When `OPENAI_API_KEY` is provided, scenarios are generated using OpenAI's API with the following configuration:

**Model**: `gpt-4o-mini`

**System Prompt**: Comprehensive training content covering all 4 modules with GMC and NHS guidance

**Structured Output**:

```json
{
  "type": "json_schema",
  "json_schema": {
    "name": "nhs_scenario_response",
    "strict": true,
    "schema": {
      "type": "object",
      "properties": {
        "scenario_title": { "type": "string" },
        "scenario_text": { "type": "string" },
        "question": { "type": "string" },
        "options": {
          "type": "object",
          "properties": {
            "A": { "type": "string" },
            "B": { "type": "string" },
            "C": { "type": "string" },
            "D": { "type": "string" }
          },
          "required": ["A", "B", "C", "D"]
        },
        "correct_answer": {
          "type": "string",
          "enum": ["A", "B", "C", "D"]
        },
        "rationale": { "type": "string" }
      },
      "required": [
        "scenario_title",
        "scenario_text",
        "question",
        "options",
        "correct_answer",
        "rationale"
      ]
    }
  }
}
```

**Fallback**: If OpenAI API fails or key is unavailable, returns mock scenarios from `shared/mockScenarios.ts`

---

## Rate Limiting

Currently, no rate limiting is implemented.

**Future**: Will implement rate limiting to:
- Prevent abuse
- Protect OpenAI API quota
- Ensure fair resource usage

---

## Versioning

Current API version: **v1** (implicit)

**Future**: Will implement explicit versioning:
- `/api/v1/...`
- `/api/v2/...`

---

## Client Libraries

### JavaScript/TypeScript

The frontend uses `apiRequest` from `@lib/queryClient`:

```typescript
import { apiRequest } from "@lib/queryClient";

// Generate scenario
const scenario = await apiRequest<Scenario>("/api/scenario/generate", {
  method: "POST",
  body: JSON.stringify({ moduleNumber: 1 }),
});

// Submit answer
const result = await apiRequest<{ isCorrect: boolean }>("/api/scenario/submit", {
  method: "POST",
  body: JSON.stringify({
    selectedAnswer: "C",
    correctAnswer: "C",
  }),
});
```

### Using TanStack Query

```typescript
// Mutation for generating scenarios
const scenarioMutation = useMutation({
  mutationFn: async (moduleNumber: number) => {
    return apiRequest<Scenario>("/api/scenario/generate", {
      method: "POST",
      body: JSON.stringify({ moduleNumber, scenarioIndex }),
    });
  },
});

// Mutation for submitting answers
const answerMutation = useMutation({
  mutationFn: async () => {
    return apiRequest<{ isCorrect: boolean }>("/api/scenario/submit", {
      method: "POST",
      body: JSON.stringify({
        selectedAnswer,
        correctAnswer: currentScenario.correct_answer,
      }),
    });
  },
});
```

---

## Testing the API

### Using curl

```bash
# Create a session
curl -X POST http://localhost:5000/api/session

# Generate a scenario
curl -X POST http://localhost:5000/api/scenario/generate \
  -H "Content-Type: application/json" \
  -d '{"moduleNumber": 1, "scenarioIndex": 0}'

# Submit an answer
curl -X POST http://localhost:5000/api/scenario/submit \
  -H "Content-Type: application/json" \
  -d '{"selectedAnswer": "C", "correctAnswer": "C"}'
```

### Using Postman

Import the following collection:

```json
{
  "info": {
    "name": "NHS Training API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Create Session",
      "request": {
        "method": "POST",
        "url": "http://localhost:5000/api/session"
      }
    },
    {
      "name": "Generate Scenario",
      "request": {
        "method": "POST",
        "url": "http://localhost:5000/api/scenario/generate",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\"moduleNumber\": 1, \"scenarioIndex\": 0}"
        }
      }
    },
    {
      "name": "Submit Answer",
      "request": {
        "method": "POST",
        "url": "http://localhost:5000/api/scenario/submit",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\"selectedAnswer\": \"C\", \"correctAnswer\": \"C\"}"
        }
      }
    }
  ]
}
```

---

## Future API Endpoints

### Authentication (Planned)

```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/me
```

### User Progress (Planned)

```
GET  /api/progress/:userId
POST /api/progress/save
```

### Analytics (Planned)

```
GET  /api/analytics/module/:moduleNumber
GET  /api/analytics/user/:userId
```

---

## Changelog

### v1.0.0 (Current)

- Initial API release
- Session creation endpoint
- Scenario generation with OpenAI integration
- Answer submission and validation
- Mock scenario fallback system

---

**Document Version**: 1.0.0  
**Last Updated**: 2024  
**API Base URL**: `http://localhost:5000/api`
