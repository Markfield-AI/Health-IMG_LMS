import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { scenarioSchema } from "@shared/schema";
import { getMockScenarioByModule } from "@shared/mockScenarios";
import OpenAI from "openai";
import { TRAINING_SYSTEM_PROMPT } from "./training-content";

// Lazy initialize OpenAI only when needed and API key is available
let openai: OpenAI | null = null;

function getOpenAIClient(): OpenAI {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is not configured");
  }
  
  if (!openai) {
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
  
  return openai;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Create a new training session
  app.post("/api/session", async (req, res) => {
    try {
      const session = await storage.createSession();
      res.json(session);
    } catch (error) {
      console.error("Error creating session:", error);
      res.status(500).json({ error: "Failed to create session" });
    }
  });

  // Get session data
  app.get("/api/session/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const session = await storage.getSession(sessionId);
      
      if (!session) {
        return res.status(404).json({ error: "Session not found" });
      }
      
      res.json(session);
    } catch (error) {
      console.error("Error fetching session:", error);
      res.status(500).json({ error: "Failed to fetch session" });
    }
  });

  // Generate a new scenario for a specific module
  app.post("/api/scenario/generate", async (req, res) => {
    try {
      const { moduleNumber, scenarioIndex } = req.body;
      
      if (!moduleNumber || moduleNumber < 1 || moduleNumber > 4) {
        return res.status(400).json({ error: "Invalid module number. Must be 1-4" });
      }

      // Check if OpenAI API key is available
      if (!process.env.OPENAI_API_KEY) {
        // Return mock scenario from shared mockScenarios file
        const mockScenario = getMockScenarioByModule(moduleNumber, scenarioIndex);
        return res.json(mockScenario);
      }

      const moduleNames = {
        1: "Module 1: Team Culture",
        2: "Module 2: Communication",
        3: "Module 3: Patient Sensitivity",
        4: "Module 4: Professional Integration"
      };

      const userPrompt = `Generate a realistic, challenging scenario for ${moduleNames[moduleNumber as keyof typeof moduleNames]}. Make it engaging and test core competencies. Return only the JSON object, no other text.`;

      const client = getOpenAIClient();
      const completion = await client.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: TRAINING_SYSTEM_PROMPT },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.8,
        max_tokens: 1500,
      });

      const content = completion.choices[0]?.message?.content;
      if (!content) {
        throw new Error("No response from OpenAI");
      }

      // Parse and validate the JSON response
      const scenario = JSON.parse(content);
      const validatedScenario = scenarioSchema.parse(scenario);

      res.json(validatedScenario);
    } catch (error) {
      console.error("Error generating scenario:", error);
      res.status(500).json({ 
        error: "Failed to generate scenario",
        details: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Submit an answer and get feedback
  app.post("/api/scenario/submit", async (req, res) => {
    try {
      const { sessionId, scenarioId, selectedAnswer, correctAnswer } = req.body;

      if (!sessionId || !selectedAnswer || !correctAnswer) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const session = await storage.getSession(sessionId);
      if (!session) {
        return res.status(404).json({ error: "Session not found" });
      }

      const isCorrect = selectedAnswer === correctAnswer;
      
      // Update session stats
      const updatedSession = await storage.updateSession(sessionId, {
        totalAttempts: session.totalAttempts + 1,
        correctAnswers: session.correctAnswers + (isCorrect ? 1 : 0),
        completedScenarios: scenarioId && !session.completedScenarios.includes(scenarioId)
          ? [...session.completedScenarios, scenarioId]
          : session.completedScenarios,
      });

      res.json({
        isCorrect,
        session: updatedSession,
      });
    } catch (error) {
      console.error("Error submitting answer:", error);
      res.status(500).json({ error: "Failed to submit answer" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
