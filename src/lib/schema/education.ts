// lib/schema/education.ts
export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  start: string;
  end?: string | null;
  location?: string;
  gpa?: string;
  highlights?: string[];
}
