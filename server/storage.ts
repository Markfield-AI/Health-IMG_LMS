import { type User, type InsertUser, type Session } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Session management
  getSession(sessionId: string): Promise<Session | undefined>;
  createSession(): Promise<Session>;
  updateSession(sessionId: string, session: Partial<Session>): Promise<Session>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private sessions: Map<string, Session>;

  constructor() {
    this.users = new Map();
    this.sessions = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getSession(sessionId: string): Promise<Session | undefined> {
    return this.sessions.get(sessionId);
  }

  async createSession(): Promise<Session> {
    const sessionId = randomUUID();
    const session: Session = {
      sessionId,
      completedScenarios: [],
      currentScenarioIndex: 0,
      correctAnswers: 0,
      totalAttempts: 0,
    };
    this.sessions.set(sessionId, session);
    return session;
  }

  async updateSession(sessionId: string, updates: Partial<Session>): Promise<Session> {
    const existing = this.sessions.get(sessionId);
    if (!existing) {
      throw new Error("Session not found");
    }
    const updated = { ...existing, ...updates };
    this.sessions.set(sessionId, updated);
    return updated;
  }
}

export const storage = new MemStorage();
