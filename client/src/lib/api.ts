import { Scenario, Session } from "@shared/schema";

export async function createSession(): Promise<Session> {
  const response = await fetch("/api/session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  
  if (!response.ok) {
    throw new Error("Failed to create session");
  }
  
  return response.json();
}

export async function getSession(sessionId: string): Promise<Session> {
  const response = await fetch(`/api/session/${sessionId}`);
  
  if (!response.ok) {
    throw new Error("Failed to fetch session");
  }
  
  return response.json();
}

export async function generateScenario(moduleNumber: number, sessionId: string, scenarioIndex?: number): Promise<Scenario> {
  const response = await fetch("/api/scenario/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ moduleNumber, sessionId, scenarioIndex }),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.details || "Failed to generate scenario");
  }
  
  return response.json();
}

export async function submitAnswer(
  sessionId: string,
  scenarioId: number,
  selectedAnswer: string,
  correctAnswer: string
): Promise<{ isCorrect: boolean; session: Session }> {
  const response = await fetch("/api/scenario/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId, scenarioId, selectedAnswer, correctAnswer }),
  });
  
  if (!response.ok) {
    throw new Error("Failed to submit answer");
  }
  
  return response.json();
}
