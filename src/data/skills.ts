export const skillGroups = [
  {
    title: "Frontend Engineering",
    description: "Refined, responsive interfaces with modern component architecture.",
    skills: ["React.js", "Next.js", "React Native", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend Systems",
    description: "APIs, server logic, and scalable application foundations.",
    skills: ["Node.js", "Express.js", "Django", "Flask", "FastAPI"],
  },
  {
    title: "AI Engineering",
    description: "Practical AI workflows designed for usable product outcomes.",
    skills: ["GenAI", "LLM", "RAG", "Prompt Engineering", "Gemini API"],
  },
  {
    title: "Databases",
    description: "Structured persistence for products, dashboards, and workflows.",
    skills: ["MySQL", "MongoDB", "Data Modeling"],
  },
  {
    title: "Tools & Deployment",
    description: "Reliable delivery workflows from repository to production.",
    skills: ["Git", "GitHub", "Vercel", "Firebase", "WordPress"],
  },
  {
    title: "Product Thinking",
    description: "Engineering decisions shaped around business value and UX.",
    skills: ["REST APIs", "Scalable Systems", "CI/CD", "Agile", "Automation"],
  },
];

export const marqueeSkills = skillGroups.flatMap((group) => group.skills);
