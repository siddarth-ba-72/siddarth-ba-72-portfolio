export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

// ─────────────────────────────────────────────────────────────
// ADD or REMOVE projects here. Each push to GitHub auto-deploys.
// ─────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    title: "Interview Prep-Pilot-AI",
    description:
      "Prep-Pilot helps you walk into your next interview ready. Create a topic, learn it with an AI tutor in Learn/Chat Mode, then stress-test yourself in Test Mode with auto-generated questions and instant scoring, and finish with a Mock Interview featuring sequential Q&A and real-time evaluation.",
    techStack: ["Spring Boot", "AWS", "React", "MongoDB", "FastAPI", "OpenAI API", "Docker"],
    githubUrl: "https://github.com/siddarth-ba-72/Interview-Prep-Pilot-AI",
    liveUrl: "https://prep-pilot-ui.vercel.app/dashboard",
  },
  {
    title: "Talent-Lens-AI",
    description:
      "TalentLens is an AI-powered candidate sourcing and scoring tool for recruiters. A recruiter submits a job description — as pasted text or an uploaded document — and TalentLens automatically parses it, searches public platforms (GitHub and Stack Overflow) for matching profiles, scores each candidate against the JD using an LLM, and returns a ranked list ready to review or export.",
    techStack: ["Spring Boot", "React", "MongoDB", "FastAPI", "OpenAI API"],
    githubUrl: "https://github.com/siddarth-ba-72/Talent-Lens-AI",
    liveUrl: "https://talentlens-tawny.vercel.app/login",
  },
  {
    title: "Data-Trace-Mind",
    description: "DataTraceMind is an AI-powered data reliability platform that detects silent data pipeline errors and traces them to their root cause. It proposes and validates minimal repairs in staging, then applies changes only after human approval.",
    techStack: ["FastAPI", "React", "Google ADK", "Gemini"],
    githubUrl: "https://github.com/siddarth-ba-72/DataTraceMind",
  },
  {
    title: "Pharma-Plus",
    description: "PharmaPlus is a full-stack online pharmacy platform where customers can browse medicines, manage their carts, and track orders. Built with React, TypeScript, Express, and PostgreSQL, it also features secure role-based access and an admin dashboard for inventory and Excel-based medicine imports.",
    techStack: ["Node.js", "React", "TypeScript", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/siddarth-ba-72/PharmaPlus",
  }
];
