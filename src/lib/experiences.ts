// lib/experience.ts

import { ExperienceItem } from "./schema/experience";
import { TechTag } from "./techTag";

const experience: ExperienceItem[] = [
  {
    id: "amazon-1",
    title: "Software Development Engineer",
    company: "Amazon",
    start: "2016",
    end: "2025",
    summary: "Led development of high-scale distributed systems across Digital Commerce, Alexa Shopping, and Dashcart teams. Focused on building reliable backend infrastructure, optimizing system performance, and mentoring engineering teams.",
    highlights: [
      "Architected and evolved backend systems for Amazon's digital ordering and payments infrastructure, enabling seamless money movement across global platforms such as Kindle, Prime Video, and Alexa.",
      "Integrated new payment methods and in-app purchase flows, extending support for diverse digital transactions and improving conversion rates across multiple product lines.",
      "Engineered high-throughput external-facing APIs, enabling ingestion of 250k+ items of product data with real-time updates to support smart cart shopping features with robust security protocols.",
      "Designed and deployed scalable microservices using Java, Python, and Node.js on AWS (Lambda, Fargate, DynamoDB, S3), ensuring high throughput and fault-tolerant design.",
      "Led full development lifecycle from requirements to deployment and post-production operations, maintaining 99.99% uptime for Tier-1 systems serving millions of customers worldwide.",
      "Collaborated cross-functionally to drive a seamless knowledge transfer, enabling a new team in India to take full ownership of key services and features.",
      "Championed CI/CD and test automation, reducing release cycles from weeks to days and improving developer efficiency by 30%.",
      "Mentored engineers across teams, defining coding standards, reviewing designs, and fostering engineering excellence."
    ],
    techStack: [TechTag.AWS, TechTag.Java, TechTag.Junit, TechTag.TypeScript, TechTag.Python, TechTag.Jest, TechTag.MicroServices, TechTag.SystemDesign] 
  },
  {
    id: "asu-1",
    title: "Graduate Research Assistant",
    company: "Arizona State University",
    start: "2014",
    end: "2015",
    highlights: [
      "Contributed to the Formative Assessment with Computational Technologies (FACT) project, enhancing an intelligent tutoring application by performing Quality Engineering testing for the product.",
      "Developed an automation test engine using the Robotium Framework, increasing robustness in annotation detection for the server."
    ],
    techStack: [ TechTag.Java, TechTag.Android, TechTag.Robotium] 
  },
  {
    id: "infosys-1",
    title: "Systems Engineer",
    company: "Infosys Ltd",
    start: "2011",
    end: "2013",
    highlights: [
      "Automated daily monitoring tasks with shell scripting, boosting productivity and reducing manual intervention by 10% by designing tools for automated reporting, enhancing operational efficiency across teams.",
      "Provided technical support for multi-platform product deployments, ensuring smooth transitions and minimal downtime."
    ],
    techStack: [ TechTag.CPlus, TechTag.ShellScripting, TechTag.Unix] 
  }
];

export default experience;
