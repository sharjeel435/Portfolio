// ============================================================
// PORTFOLIO DATA — Single source of truth
// ============================================================

export const personal = {
  name: "Sharjeel Safdar",
  title: "AI Engineer",
  // Headline B (approved)
  tagline: "Most ML portfolios demo. Mine deploy.",
  taglineAlt: "Engineering Intelligent AI Systems.",
  status: "Open to AI / ML Opportunities",
  location: "Karachi, Pakistan",
  email: "sharjeelsafdar435@gmail.com",
  github: "https://github.com/sharjeel435",
  linkedin: "",
  description:
    "AI Engineer specializing in forecasting systems, retrieval-augmented generation, and the full stack between a model and a user.",
  descriptionLong:
    "I'm a Computer Science graduate focused on Machine Learning, Retrieval-Augmented Generation and Data Science. I take AI projects beyond notebooks — building the data pipelines, FastAPI backends, and Next.js interfaces needed to turn models into production systems. My work spans AQI forecasting at R² 0.82, hybrid RAG pipelines backed by Pinecone, ML-driven crypto education platforms, and adaptive interview tools.",
  resumeUrl: "/resume/Sharjeel_Safdar_Resume.pdf",
  // Key stats for hero
  stats: [
    { value: 0.82, display: "0.82", label: "R² @ 24h forecast", suffix: "" },
    { value: 89, display: "89", label: "ML classifier accuracy", suffix: "%" },
    { value: 354, display: "354", label: "Features engineered", suffix: "" },
    { value: 105912, display: "105K+", label: "Records processed", suffix: "" },
  ],
};

export const experiences = [
  {
    id: "10pearls",
    company: "10Pearls",
    role: "Data Science Intern",
    // Corrected: summer internship during final year
    period: "Jun 2025 – Aug 2025",
    periodShort: "Summer 2025",
    project: "Air Quality Index (AQI) Forecasting",
    location: "Karachi, Pakistan",
    description:
      "Built an end-to-end AQI forecasting system covering Karachi, Lahore and Islamabad — processing multi-year Open-Meteo data into production-ready forecasts at 24, 48 and 72-hour horizons.",
    highlights: [
      "Processed 211,824 raw records → 105,912 validated across 11 meteorological variables",
      "Engineered 354 features: temporal lags, rolling statistics, seasonal interaction terms",
      "Passed all 6 data-leakage checks, ensuring production-safe model integrity",
      "Selected Random Forest over 2 baselines: RMSE 22.85 vs 27.58 (R² 0.82 at 24h horizon)",
      "Shipped FastAPI backend + Next.js dashboard with 3 GitHub Actions CI/CD pipelines",
      "Covered by 58 Python unit tests and 24 frontend integration tests",
    ],
    metrics: [
      { label: "Cities", value: "3", raw: 3 },
      { label: "Valid Records", value: "105,912", raw: 105912 },
      { label: "Features", value: "354", raw: 354 },
      { label: "R² @ 24h", value: "0.82", raw: 0.82 },
    ],
    tags: ["Python", "Scikit-learn", "SHAP", "FastAPI", "Next.js", "GitHub Actions"],
    color: "accent",
  },
  {
    id: "gentechnologies",
    company: "Generation Next Technologies",
    role: "AI Engineer — Contract",
    // Corrected: earlier project engagement
    period: "Mar 2025 – May 2025",
    periodShort: "Spring 2025",
    project: "Snakitos RAG System",
    location: "Remote",
    description:
      "Designed and shipped a Hybrid Retrieval-Augmented Generation pipeline using Pinecone vector search and LLM APIs — delivering context-grounded, domain-specific AI responses.",
    highlights: [
      "Architected hybrid RAG: dense Pinecone vector retrieval + LLM generation layer",
      "Integrated Pinecone for scalable semantic search over domain knowledge base",
      "Delivered context-aware answers grounded strictly in Snakitos domain data",
      "Improved retrieval quality iteratively through structured evaluation across query categories",
    ],
    metrics: [],
    tags: ["RAG", "LLMs", "Pinecone", "Python", "API Integration", "Vector Search"],
    color: "teal",
  },
];

export const projects = [
  {
    id: "personalized-crypto",
    name: "Personalized Crypto",
    label: "Final Year Project",
    role: "Project Manager & Team Lead",
    team: "Team of 3",
    featured: true,
    url: "https://personalizedcrypto2025.vercel.app",
    description:
      "AI-powered crypto education and simulation platform — personalizes learning paths and risk profiles using three trained ML models and a live market data layer.",
    longDescription:
      "Led a 3-member team to deliver 9 integrated modules. Reviewed 34 research studies across 6 themes. Trained and compared 3 ML models on a 10,000-record trader-profile dataset.",
    highlights: [
      "89% Random Forest classifier accuracy on 10,000-record trader-profile dataset",
      "R² 86.89% polynomial risk model, improved from ~70% via 66 interaction terms",
      "GPT-4o-mini personalized learning roadmaps and PDF report generation",
      "150-question randomized assessment bank with adaptive difficulty",
      "CoinGecko API for live market data integration",
    ],
    metrics: [
      { label: "ML Models", value: "3", raw: 3 },
      { label: "Accuracy", value: "89%", raw: 89 },
      { label: "Studies Reviewed", value: "34", raw: 34 },
      { label: "Modules", value: "9", raw: 9 },
    ],
    tags: ["React", "FastAPI", "Supabase", "PostgreSQL", "ML", "GPT-4o-mini", "Python"],
    image: "/projects/personalized-crypto.png",
    color: "accent",
    // Architecture diagram type
    diagram: "ml-pipeline",
  },
  {
    id: "aqi-forecasting",
    name: "AQI Forecasting Platform",
    label: "ML · Time-Series",
    role: "Data Science Intern @ 10Pearls",
    team: null,
    featured: false,
    url: null,
    description:
      "Production-oriented air-quality forecasting — R² 0.82 at 24-hour horizon across 3 Pakistani cities, with a FastAPI backend and Next.js dashboard.",
    longDescription:
      "4 years of hourly Open-Meteo data. 354 engineered features. Random Forest bests 2 baselines. CI/CD across 3 pipelines. 82 tests total.",
    highlights: [
      "3 cities, 4 years of hourly data, 354 engineered features",
      "Random Forest: R² 0.82 at 24h, outperforming persistence baseline",
      "FastAPI backend + Next.js dashboard, fully containerised",
      "3 GitHub Actions pipelines, 82 tests total",
    ],
    metrics: [
      { label: "Cities", value: "3", raw: 3 },
      { label: "Features", value: "354", raw: 354 },
      { label: "24h R²", value: "0.82", raw: 0.82 },
      { label: "Tests", value: "82", raw: 82 },
    ],
    tags: ["Python", "Scikit-learn", "SHAP", "FastAPI", "Next.js", "GitHub Actions"],
    image: "/projects/aqi-forecasting.png",
    color: "teal",
    diagram: "rag-pipeline",
  },
  {
    id: "snakitos-rag",
    name: "Snakitos RAG",
    label: "Hybrid RAG System",
    role: "AI Engineer @ Generation Next",
    team: null,
    featured: false,
    url: null,
    description:
      "Context-grounded AI assistant — Pinecone-backed dense retrieval meets LLM generation for domain-specific, hallucination-resistant answers.",
    longDescription:
      "Hybrid RAG pipeline: Pinecone vector DB for semantic retrieval + LLM API for generation, with structured evaluation improving retrieval precision across query categories.",
    highlights: [
      "Hybrid RAG: dense Pinecone retrieval + LLM generation layer",
      "Pinecone vector database for scalable semantic search",
      "Iterative retrieval quality improvement via systematic evaluation",
    ],
    metrics: [],
    tags: ["RAG", "LLMs", "Pinecone", "Python", "Vector Search"],
    image: "/projects/rag-system.png",
    color: "emerald",
    diagram: null,
  },
  {
    id: "ai-interview-coach",
    name: "AI Interview Coach",
    label: "Adaptive Interview Prep",
    role: "Developer",
    team: null,
    featured: false,
    url: null,
    description:
      "Resume-driven interview platform — generates questions from uploaded CVs, captures voice, and provides AI scoring + model-answer comparison.",
    longDescription:
      "Resume-based question generation, Web Speech API voice capture, AI scoring, model-answer comparison, persistent reports, Docker deployment. Supports Ollama + Claude.",
    highlights: [
      "Resume → interview questions pipeline via NLP",
      "Voice analytics with Web Speech API, transcription and scoring",
      "AI scoring against model answers (Ollama + Claude support)",
      "Docker deployment with persistent session reports",
    ],
    metrics: [],
    tags: ["React", "FastAPI", "SQLite", "Web Speech API", "Ollama", "Docker"],
    image: "/projects/interview-coach.png",
    color: "amber",
    diagram: null,
  },
];

export const skillGroups = [
  {
    category: "AI / Machine Learning",
    icon: "Brain",
    color: "accent",
    skills: [
      "Machine Learning",
      "RAG",
      "LLM Integration",
      "Scikit-learn",
      "TensorFlow / Keras",
      "SHAP",
      "Random Forest",
      "Gradient Boosting",
      "Feature Engineering",
      "EDA",
      "Data Preprocessing",
      "Prompt Engineering",
      "Pinecone",
    ],
  },
  {
    category: "Backend / Web",
    icon: "Code2",
    color: "teal",
    skills: [
      "Python",
      "FastAPI",
      "REST APIs",
      "Next.js",
      "React",
      "JavaScript",
      "Supabase",
      "PostgreSQL",
      "SQLite",
    ],
  },
  {
    category: "DevOps / Engineering",
    icon: "Cpu",
    color: "emerald",
    skills: [
      "Docker",
      "GitHub Actions",
      "Git",
      "Linux",
      "Vercel",
      "Render",
      "pytest",
      "Jira",
      "Hopsworks",
    ],
  },
  {
    category: "Software / Leadership",
    icon: "Users",
    color: "amber",
    skills: [
      "Agile / Scrum",
      "Software Testing",
      "SDLC",
      "Sprint Planning",
      "Backlog Management",
      "Technical Research",
      "Requirements Analysis",
      "Risk Management",
      "Team Leadership",
    ],
  },
];

export const education = [
  {
    institution: "FAST University",
    shortName: "FAST-NUCES",
    degree: "Bachelor of Computer Science",
    // Completed Jun 2026
    period: "Aug 2022 – Jun 2026",
    status: "Completed",
    grade: null,
    coursework: [
      "Artificial Intelligence",
      "Software Engineering",
      "Software Project Management",
      "DevOps",
      "Software Testing",
      "Object-Oriented Programming",
    ],
  },
  {
    institution: "Bahria College Karsaz",
    shortName: "Bahria College",
    degree: "Intermediate — Pre-Engineering (A+)",
    period: "2020 – 2022",
    status: "Completed",
    grade: "Grade A+",
    coursework: [],
  },
];
