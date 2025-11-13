
import React from 'react';

export interface SectionWrapperProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary-accent' | 'secondary-accent' | 'emerald' | 'violet' | 'yellow' | 'white-surface' | 'conclusion';
}

export interface IconBoxProps {
  icon: React.ReactNode;
  title: string;
  textColorClass?: string;
}

export interface AchievementCardProps {
  title: string;
  content: string[];
  type: 'did' | 'gained';
}

export interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
}

export interface FlowPhaseProps {
  phaseNumber: number;
  title: string;
  items: {
    heading: string;
    description: string;
    colSpan?: number; // Optional for layout in grid
  }[];
  bgColorClass: string;
}

export interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface GeminiResponse {
  text: string;
}