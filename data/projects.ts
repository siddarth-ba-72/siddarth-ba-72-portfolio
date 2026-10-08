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
    title: "Talent-Lens-AI",
    description:
      "TalentLens is an AI-powered candidate sourcing and scoring tool for recruiters. A recruiter submits a job description — as pasted text or an uploaded document — and TalentLens automatically parses it, searches public platforms (GitHub and Stack Overflow) for matching profiles, scores each candidate against the JD using an LLM, and returns a ranked list ready to review or export.",
    techStack: ["Spring Boot", "React", "MongoDB", "FastAPI", "OpenAI API"],
    githubUrl: "https://github.com/siddarth-ba-72/Talent-Lens-AI",
    liveUrl: "https://talentlens-tawny.vercel.app/login",
  },
  {
    title: "Interview Prep-Pilot-AI",
    description:
      "Prep-Pilot helps you walk into your next interview ready. Create a topic, learn it with an AI tutor in Learn/Chat Mode, then stress-test yourself in Test Mode with auto-generated questions and instant scoring, and finish with a Mock Interview featuring sequential Q&A and real-time evaluation.",
    techStack: ["Spring Boot", "React", "MongoDB", "FastAPI", "OpenAI API"],
    githubUrl: "https://github.com/siddarth-ba-72/Interview-Prep-Pilot-AI",
    liveUrl: "https://prep-pilot-ui.vercel.app/dashboard",
  }
];
