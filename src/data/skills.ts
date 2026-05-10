export const skillGroups = [
  { title: "Languages", skills: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"] },
  { title: "Frontend", skills: ["React.js", "Next.js", "React Native", "Tailwind CSS", "Bootstrap"] },
  { title: "Backend", skills: ["Node.js", "Express.js", "Django", "Flask", "FastAPI"] },
  { title: "AI Engineering", skills: ["GenAI", "LLM", "RAG", "Prompt Engineering"] },
  { title: "Databases", skills: ["MySQL", "MongoDB"] },
  { title: "Tools", skills: ["Git", "GitHub", "Vercel", "Firebase", "WordPress"] },
  { title: "Concepts", skills: ["REST APIs", "Scalable Systems", "CI/CD", "Agile"] },
];

export const marqueeSkills = skillGroups.flatMap((group) => group.skills);
