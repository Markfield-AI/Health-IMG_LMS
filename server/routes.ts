import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { scenarioSchema } from "@shared/schema";
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
        // Return mock scenario when API key is not available
        const mockScenarios = [
          {
            module: "Module 1: Team Culture",
            moduleNumber: 1,
            scenario_title: "The Challenging Nurse",
            scenario_text: "You are a new IMG registrar on a busy medical ward. During your ward round, you prescribe 1L of normal saline at 125ml/hr for a post-operative patient. Sarah, a senior nurse with 15 years of experience, approaches you and says: 'I wonder if we should consider a lower rate, given his cardiac history and age. His last echo showed an ejection fraction of 35%.'\n\nIn your home country, a nurse would never question a doctor's prescription, and you feel somewhat undermined in front of the team.",
            question: "What is the most appropriate professional response that reflects NHS MDT culture?",
            options: {
              A: "Politely but firmly tell Sarah that you are the doctor and you will make the clinical decisions.",
              B: "Ignore Sarah's comment and continue with the ward round to avoid confrontation.",
              C: "Acknowledge Sarah's concern, thank her for the input, and review the patient's notes and fluid guidelines together.",
              D: "Change the prescription immediately to avoid any conflict with nursing staff."
            },
            correct_answer: "C",
            rationale: "Excellent! This response perfectly demonstrates the NHS MDT culture. By acknowledging Sarah's expertise and reviewing the guidelines together, you show professional parity and collaborative decision-making."
          },
          {
            module: "Module 2: Communication",
            moduleNumber: 2,
            scenario_title: "Decoding the Consultant",
            scenario_text: "You receive an email from your consultant at 4:45 PM on Friday: 'I wonder if you could possibly have a look at the discharge summary for Mrs. Jones before you leave? No rush, of course. Just when you get a chance.'\n\nYou have plans to meet friends at 5:30 PM and the discharge summary will take at least 45 minutes to complete properly.",
            question: "How should you interpret this communication and respond?",
            options: {
              A: "The consultant said 'no rush', so complete it on Monday morning when you're fresh.",
              B: "This is a polite but firm instruction to complete it today before leaving, as it's clinically important.",
              C: "Send a quick reply saying you'll do it 'when you get a chance' to match the tone.",
              D: "Complete half of it today and finish the rest on Monday."
            },
            correct_answer: "B",
            rationale: "Correct! In NHS professional culture, 'I wonder if you could...' and 'no rush' are polite softeners, but the expectation is clear: complete this task today."
          },
          {
            module: "Module 3: Patient Sensitivity",
            moduleNumber: 3,
            scenario_title: "Gillick Competence",
            scenario_text: "A 15-year-old girl attends your GP surgery alone, requesting contraception. She appears mature and articulate. She explicitly states: 'Please don't tell my parents. They would be really upset if they knew I was sexually active.'\n\nYou come from a culture where discussing such matters with minors without parental consent would be unthinkable.",
            question: "What is the appropriate course of action according to UK law and GMC guidance?",
            options: {
              A: "Refuse to discuss contraception without parental consent, as she is under 16.",
              B: "Assess her understanding and maturity (Gillick Competence). If she demonstrates sufficient understanding, provide contraception and maintain confidentiality.",
              C: "Agree to help her, but insist on informing her parents as a condition of providing treatment.",
              D: "Provide the contraception but document that you advised her to tell her parents."
            },
            correct_answer: "B",
            rationale: "Excellent! This is the correct application of Gillick Competence and UK law. If the 15-year-old demonstrates sufficient maturity and understanding, she can legally consent without parental knowledge."
          },
          {
            module: "Module 4: Professional Integration",
            moduleNumber: 4,
            scenario_title: "Social Media Dilemma",
            scenario_text: "During your lunch break, you notice a colleague has posted a photo in a private WhatsApp group for junior doctors. The photo shows a patient's unusual X-ray with the caption 'Look at this crazy finding!' The image has been cropped to remove identifying information, but the colleague mentions the patient's age and the ward they're on.\n\nIn your previous role, sharing interesting cases in private groups was common practice and seen as educational.",
            question: "What is the most appropriate action according to GMC professional standards?",
            options: {
              A: "Ignore it - the image is anonymized and it's in a private group of medical professionals.",
              B: "Share it with your own medical school friends as it's a good learning opportunity.",
              C: "Speak to your colleague privately about GMC guidance on confidentiality and social media, and suggest they remove the post.",
              D: "Immediately report your colleague to the Clinical Director for a serious breach."
            },
            correct_answer: "C",
            rationale: "Correct! While the image may be cropped, providing the patient's age and location could potentially identify them, which breaches confidentiality."
          }
        ];

        const mockScenario = mockScenarios.find(s => s.moduleNumber === moduleNumber) || mockScenarios[0];
        
        // Add variation to title if scenarioIndex is provided
        if (scenarioIndex !== undefined && scenarioIndex > 0) {
          const variationNum = (scenarioIndex % mockScenarios.length) + 1;
          mockScenario.scenario_title = `${mockScenario.scenario_title} (Variation ${variationNum})`;
        }

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
