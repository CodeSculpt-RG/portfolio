export type Project = {
  name: string;
  type: string;
  description: string;
  tags: string[];
  live?: string;
  code?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "LayerStory",
    type: "Shopify Build",
    description: "A polished production website for brand and business use, shaped around responsive presentation, clarity, and conversion.",
    tags: ["Shopify", "Web Design", "Responsive UI", "Production"],
    live: "https://layerstory.com/",
    featured: true,
  },
  {
    name: "Space Station Coworking",
    type: "WordPress Build",
    description: "A professional coworking website with a focused business narrative, clean CMS structure, and responsive user experience.",
    tags: ["WordPress", "CMS", "Responsive Design", "Business Website"],
    live: "https://spacestationcoworking.com/",
    featured: true,
  },
  {
    name: "GenAI Assistant with RAG",
    type: "AI / RAG System",
    description: "A retrieval-augmented AI assistant using cosine similarity and context-aware response generation for more grounded answers.",
    tags: ["Node.js", "Express.js", "Gemini API", "React", "Vercel", "RAG"],
    code: "https://github.com/CodeSculpt-RG/GenAI-Assistant-with-RAG",
    featured: true,
  },
  {
    name: "Movie Search App",
    type: "React Application",
    description: "A responsive movie discovery interface with debounced search, optimized API calls, and clean result rendering.",
    tags: ["React", "TMDB API", "Debouncing", "API Integration"],
    code: "https://github.com/CodeSculpt-RG",
  },
  {
    name: "Wikipedia Search App",
    type: "API Integration",
    description: "A real-time Wikipedia search interface designed around REST API integration, fast feedback, and readable results.",
    tags: ["JavaScript", "REST API", "Responsive UI"],
    code: "https://github.com/CodeSculpt-RG/wikipedia-search-applications",
  },
  {
    name: "Busket",
    type: "TypeScript Build",
    description: "A TypeScript project from Rahul's public GitHub profile, positioned as a modern product interface build.",
    tags: ["TypeScript", "Frontend", "Product UI"],
    code: "https://github.com/CodeSculpt-RG/Busket",
  },
  {
    name: "Inventory Management System",
    type: "Business Application",
    description: "An inventory workflow project focused on operational tracking, structured data, and practical business management.",
    tags: ["JavaScript", "Business App", "Dashboard"],
    code: "https://github.com/CodeSculpt-RG/Inventory-Management-System",
  },
  {
    name: "Dashboard",
    type: "Dashboard Build",
    description: "A deployed dashboard interface for structured data presentation, internal visibility, and workflow clarity.",
    tags: ["JavaScript", "Dashboard", "Vercel"],
    code: "https://github.com/CodeSculpt-RG/Dashboard",
    live: "https://dashboard-theta-one-50.vercel.app",
  },
  {
    name: "Learning Path Generator Chatbot",
    type: "AI Application",
    description: "A Python chatbot that helps generate guided learning paths through conversational AI logic.",
    tags: ["Python", "AI", "Chatbot", "Vercel"],
    code: "https://github.com/CodeSculpt-RG/Learning-path-generator-chatbot",
    live: "https://learning-path-generator-chatbot.vercel.app",
  },
  {
    name: "Custom ETL Trade Analysis",
    type: "Data Engineering",
    description: "A modular ETL pipeline for trade data processing, feature engineering, and SQL analysis for BI reporting.",
    tags: ["Python", "ETL", "SQL", "Analytics"],
    code: "https://github.com/CodeSculpt-RG/custom-etl-trade-analysis",
    live: "https://custom-etl-trade-analysis.vercel.app/",
  },
];
