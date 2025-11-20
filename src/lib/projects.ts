// lib/projects.ts
import type { Project } from "./schema/project";
import { TechTag } from "./techTag";

export const projects: Project[] = [
  {
    id: "crypto-price-analyzer",
    name: "crypto-price-analyzer",
    shortDescription: "A TypeScript tool to call a public crypto price API and analyze the data.",
    role: "Owner",
    startDate: "2025-07-01",
    techStack: [TechTag.TypeScript, TechTag.NodeJs],
    repoUrl: "https://github.com/mshakthi/crypto-price-analyzer",
    highlight: true,
    problem: "Need to analyze the crypto price data for a given crypto currency. ",
    solution: "Built a tool to call a public crypto price API and analyze the data. This is a simple tool to familiarize myself with the API and the data.",
    impact: "Helped me to familiarize myself with the API and the data.",
  }, 
];