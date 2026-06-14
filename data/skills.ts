export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["Java", "Python", "TypeScript"],
  },
  {
    label: "Backend",
    skills: ["Spring Boot", "Spring Batch", "Microservices", "FastAPI", "Node.js", "Express.js"],
  },
  {
    label: "Frontend",
    skills: ["Angular", "React"],
  },
  {
    label: "Database",
    skills: ["IBM Db2", "PostgreSQL", "MongoDB"],
  },
  {
    label: "DevOps",
    skills: ["Shell", "Git", "GitHub", "Jenkins"],
  },
  {
    label: "AI / Emerging",
    skills: ["Agentic AI", "LLM", "RAG"],
  },
];
