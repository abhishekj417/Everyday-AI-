import React from 'react';

export enum TrackLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  track: TrackLevel;
  description: string;
  content: string; // Markdown-like text
  outcomes: string[];
  quiz: QuizQuestion[];
}

export interface Scenario {
  id: string;
  category: 'Work' | 'Personal' | 'Industry Playbooks';
  industry?: 'Sales' | 'Education' | 'Freelance' | 'Business' | 'Student' | 'Marketing' | 'Tech' | 'HR';
  title: string;
  description: string;
  templates: string[];
  badExample: string;
  goodExample: string;
  explanation: string;
}

export interface AITool {
  id: string;
  name: string;
  tagline: string;
  category: 'Assistant' | 'Visuals' | 'Research' | 'Productivity' | 'Audio';
  description: string;
  bestFor: string[];
  pricing: 'Free' | 'Freemium' | 'Paid';
  website: string;
  coachTip: string;
  logoColor: string; // Tailwind class for generic logo placeholder
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export interface Persona {
  id: string;
  role: string;
  painPoint: string;
  goal: string;
  icon: React.ComponentType<any>;
}