import { TechTag } from "../techTag";

export interface ExperienceItem {
    id: string;
    title: string;
    company: string;
    start: string;
    end?: string | null;
    summary?: string;
    highlights: string[];
    techStack?: TechTag[]
  }