// lib/schema/project.ts
import { TechTag } from "../techTag";

export interface Project {
  id: string; // slug, e.g. "json-log-analyzer"
  name: string;
  shortDescription: string;
  longDescription?: string;
  role: "Owner" | "Lead" | "Contributor";
  startDate: string; // ISO date
  endDate?: string;  // ISO date or undefined if ongoing
  techStack: TechTag[];
  repoUrl?: string;
  liveUrl?: string;
  highlight: boolean; // show on home page
  thumbnail?: string; 
  // For storytelling:
  problem?: string;
  solution?: string;
  impact?: string;
}