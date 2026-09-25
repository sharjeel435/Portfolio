// ============================================================
// PORTFOLIO DATA — Single source of truth
// ============================================================

export const personal = {
  name: "Sharjeel Safdar",
  title: "AI Engineer",
  tagline: "Building Intelligent Systems with AI, ML & RAG.",
  taglineAlt: "Engineering Intelligent AI Systems.",
  status: "Available for AI / ML Opportunities",
  location: "Karachi, Pakistan",
  email: "sharjeelsafdar435@gmail.com",
  github: "https://github.com/sharjeel435",
  linkedin: "", // No verified LinkedIn URL supplied
  description:
    "AI Engineer and Computer Science graduate building machine-learning, RAG and data-driven applications from experimentation to production.",
  descriptionLong:
    "I'm a Computer Science graduate focused on Machine Learning, Retrieval-Augmented Generation and Data Science. I enjoy taking AI projects beyond experiments—building the data pipelines, APIs, interfaces and deployment workflows needed to turn models into usable products. My experience spans AQI forecasting, RAG systems, AI-powered education platforms and adaptive interview tools, while also leading research-driven software projects using Agile/Scrum.",
  resumeUrl: "/resume/Sharjeel_Safdar_Resume.pdf",
};

export const experiences = [
  {
    id: "10pearls",
    company: "10Pearls",
    role: "Data Science Intern",
    period: "Jul 2026 – Sep 2026",
    project: "Air Quality Index (AQI) Forecasting",
    location: "Karachi, Pakistan",
    description:
      "Built an end-to-end AQI forecasting system covering Karachi, Lahore and Islamabad, processing multi-year open-meteo data into production-ready forecasts at 24, 48 and 72-hour horizons.",
    highlights: [
      "Processed 211,824 raw records → 105,912 validated records across 11 variables",
      "Engineered 354 features: temporal lags, rolling stats, seasonal interactions",
      "Passed 6/6 data-leakage checks ensuring production integrity",
      "Selected Random Forest: RMSE 22.85 vs 27.58 persistence baseline (R² 0.82 @ 24h)",
      "Built FastAPI backend + Next.js dashboard with 3 GitHub Actions CI/CD pipelines",
      "Validated with 58 Python tests and 24 frontend tests",
    ],
    metrics: [
      { label: "Cities", value: "3" },
      { label: "Valid Records", value: "105,912" },
      { label: "Features Engineered", value: "354" },
      { label: "R² at 24h", value: "0.82" },
    ],
    tags: ["Python", "Scikit-learn", "SHAP", "FastAPI", "Next.js", "GitHub Actions"],
  },
  {
    id: "gentechnologies",
    company: "Generation Next Technologies",
    role: "AI Engineer — Project-Based",
    period: "Apr 2026 – Jun 2026",
    project: "Snakitos RAG",
    location: "Remote",
    description:
      "Developed a Hybrid Retrieval-Augmented Generation system using Pinecone vector database for domain-specific context retrieval, delivering context-grounded AI answers.",
    highlights: [
      "Built Hybrid RAG pipeline: dense Pinecone retrieval + LLM API generation",
      "Integrated Pinecone vector database for scalable semantic search",
      "Achieved context-aware answers grounded in Snakitos domain data",
      "Iteratively improved retrieval quality through systematic evaluation across query categories",
    ],
    metrics: [],
    tags: ["RAG", "LLMs", "Pinecone", "Python", "API Integration", "Retrieval Evaluation"],
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
      "AI-powered crypto education and simulation platform designed to personalize learning and risk understanding for different trader profiles.",
    longDescription:
      "Led a 3-member team to deliver 9 integrated modules. Reviewed 34 research studies across 6 themes. Trained and compared 3 ML models on a 10,000-record trader-profile dataset: Random Forest (89% accuracy), Gradient Boosting (R² 85.85%), Polynomial Regression risk model (R² 86.89%).",
    highlights: [
      "89% Random Forest classifier accuracy on trader profiling",
      "R² 86.89% risk model — improved from ~70% via 66 interaction terms",
      "GPT-4o-mini personalized roadmaps and PDF reports",
      "150-question randomized assessment bank",
      "CoinGecko API integration for live market data",
    ],
    metrics: [
      { label: "ML Models", value: "3" },
      { label: "Accuracy", value: "89%" },
      { label: "Research Studies", value: "34" },
      { label: "Modules", value: "9" },
    ],
    tags: ["React", "FastAPI", "Supabase", "PostgreSQL", "Machine Learning", "GPT-4o-mini", "CoinGecko", "Python"],
    image: "/projects/personalized-crypto.png",
    color: "violet",
  },
  {
    id: "aqi-forecasting",
    name: "AQI Forecasting Platform",
    label: "ML · Time-Series Forecasting",
    role: "Data Science Intern @ 10Pearls",
    team: null,
    featured: false,
    url: null,
    description:
      "Production-oriented air-quality forecasting system predicting AQI at 24, 48 and 72-hour horizons across Karachi, Lahore and Islamabad.",
    longDescription:
      "4 years of hourly Open-Meteo data consolidated and processed. 354 engineered features. Random Forest selected over 2 baselines (RMSE 22.85 vs 27.58). R² 0.82 at 24-hour horizon.",
    highlights: [
      "3 cities, 4 years of hourly data, 354 engineered features",
      "Random Forest: R² 0.82 at 24h horizon",
      "FastAPI backend + Next.js frontend",
      "3 GitHub Actions CI/CD pipelines, 82 tests total",
    ],
    metrics: [
      { label: "Cities", value: "3" },
      { label: "Features", value: "354" },
      { label: "24h R²", value: "0.82" },
      { label: "Tests", value: "82" },
    ],
    tags: ["Python", "Scikit-learn", "SHAP", "FastAPI", "Next.js", "GitHub Actions"],
    image: "/projects/aqi-forecasting.png",
    color: "cyan",
  },
  {
    id: "snakitos-rag",
    name: "Snakitos RAG",
    label: "Hybrid RAG System",
    role: "AI Engineer @ Generation Next Technologies",
    team: null,
    featured: false,
    url: null,
    description:
      "Context-grounded AI assistant using Pinecone-backed retrieval and LLM APIs to answer user queries from domain-specific information.",
    longDescription:
      "Hybrid RAG pipeline with Pinecone vector database for semantic retrieval combined with LLM API generation for context-aware, domain-grounded responses.",
    highlights: [
      "Hybrid RAG: dense retrieval + LLM generation",
      "Pinecone vector database for scalable semantic search",
      "Iterative retrieval quality improvement via evaluation",
    ],
    metrics: [],
    tags: ["RAG", "LLMs", "Pinecone", "Python", "Vector Search", "AI Engineering"],
    image: "/projects/rag-system.png",
    color: "emerald",
  },
  {
    id: "ai-interview-coach",
    name: "AI Interview Coach",
    label: "Adaptive Interview Preparation",
    role: "Developer",
    team: null,
    featured: false,
    url: null,
    description:
      "Adaptive interview-preparation platform that generates questions from resumes, captures spoken responses and provides AI-assisted performance analysis.",
    longDescription:
      "Resume-based question generation, voice analytics, AI scoring, model-answer comparison, persistent reports, and performance tracking. Supports Ollama and Claude. Docker deployment.",
    highlights: [
      "Resume-based interview question generation",
      "Voice analytics with Web Speech API",
      "AI scoring and model-answer comparison",
      "Docker deployment with persistent reports",
    ],
    metrics: [],
    tags: ["React", "FastAPI", "SQLite", "Web Speech API", "Ollama", "Claude", "Docker"],
    image: "/projects/interview-coach.png",
    color: "amber",
  },
];

export const skillGroups = [
  {
    category: "AI / Machine Learning",
    icon: "Brain",
    color: "violet",
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
    color: "cyan",
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
    degree: "Bachelor of Computer Science",
    period: "Aug 2022 – Jun 2026",
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
    degree: "Intermediate — Pre-Engineering",
    period: "2020 – 2022",
    grade: "Grade A+",
    coursework: [],
  },
];
