export type Project = {
  name: string;
  type: string;
  description: string;
  tags: string[];
  highlights: string[];
  live?: string;
  code?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "LayerStory",
    type: "Shopify / Production Website",
    description: "A polished production website for brand and business use, shaped around responsive presentation, clarity, and conversion.",
    tags: ["Shopify", "Web Design", "Responsive UI", "Production"],
    highlights: ["Production-ready Shopify build", "Responsive brand presentation", "Clean conversion-focused layout"],
    live: "https://layerstory.com/",
    featured: true,
  },
  {
    name: "Space Station Coworking",
    type: "WordPress / Business Website",
    description: "A professional coworking website with a focused business narrative, clean CMS structure, and responsive user experience.",
    tags: ["WordPress", "CMS", "Responsive Design", "Business Website"],
    highlights: ["WordPress CMS implementation", "Business-focused landing experience", "Mobile-friendly structure"],
    live: "https://spacestationcoworking.com/",
    featured: true,
  },
  {
    name: "GenAI Assistant with RAG",
    type: "AI System",
    description: "A retrieval-augmented AI assistant using cosine similarity and context-aware response generation for more grounded answers.",
    tags: ["Node.js", "Express.js", "Gemini API", "React", "Vercel", "RAG"],
    highlights: ["RAG-based response flow", "Cosine similarity matching", "Gemini API integration"],
    code: "https://github.com/CodeSculpt-RG/GenAI-Assistant-with-RAG",
    featured: true,
  },
  {
    name: "Movie Search App",
    type: "React API App",
    description: "A responsive movie discovery interface with debounced search, optimized API calls, and clean result rendering.",
    tags: ["React", "TMDB API", "Debouncing", "API Integration"],
    highlights: ["Debounced API search", "TMDB data integration", "Responsive result grid"],
    code: "https://github.com/CodeSculpt-RG",
  },
  {
    name: "Wikipedia Search App",
    type: "REST API App",
    description: "A real-time Wikipedia search interface designed around REST API integration, fast feedback, and readable results.",
    tags: ["JavaScript", "REST API", "Responsive UI"],
    highlights: ["Real-time API rendering", "Clean search result UX", "Lightweight responsive interface"],
    code: "https://github.com/CodeSculpt-RG/wikipedia-search-applications",
  },
  {
    name: "Busket",
    type: "TypeScript Build",
    description: "A TypeScript project from Rahul's public GitHub profile, positioned as a modern product interface build.",
    tags: ["TypeScript", "Frontend", "Product UI"],
    highlights: ["Typed frontend structure", "Product interface direction", "Modern component workflow"],
    code: "https://github.com/CodeSculpt-RG/Busket",
  },
  {
    name: "Inventory Management System",
    type: "Business Application",
    description: "An inventory workflow project focused on operational tracking, structured data, and practical business management.",
    tags: ["JavaScript", "Business App", "Dashboard"],
    highlights: ["Operational tracking flow", "Structured business data", "Dashboard-oriented interface"],
    code: "https://github.com/CodeSculpt-RG/Inventory-Management-System",
  },
  {
    name: "Dashboard",
    type: "Dashboard Build",
    description: "A deployed dashboard interface for structured data presentation, internal visibility, and workflow clarity.",
    tags: ["JavaScript", "Dashboard", "Vercel"],
    highlights: ["Deployed dashboard UI", "Structured data presentation", "Internal workflow visibility"],
    code: "https://github.com/CodeSculpt-RG/Dashboard",
    live: "https://dashboard-theta-one-50.vercel.app",
  },
  {
    name: "Learning Path Generator Chatbot",
    type: "AI Application",
    description: "A Python chatbot that helps generate guided learning paths through conversational AI logic.",
    tags: ["Python", "AI", "Chatbot", "Vercel"],
    highlights: ["Guided learning path flow", "Conversational AI logic", "Lightweight deployed app"],
    code: "https://github.com/CodeSculpt-RG/Learning-path-generator-chatbot",
    live: "https://learning-path-generator-chatbot.vercel.app",
  },
  {
    name: "Custom ETL Trade Analysis",
    type: "Data Engineering",
    description: "A modular ETL pipeline for trade data processing, feature engineering, and SQL analysis for BI reporting.",
    tags: ["Python", "ETL", "SQL", "Analytics"],
    highlights: ["Modular ETL pipeline", "Feature engineering workflow", "BI-ready SQL analysis"],
    code: "https://github.com/CodeSculpt-RG/custom-etl-trade-analysis",
    live: "https://custom-etl-trade-analysis.vercel.app/",
  },
];
