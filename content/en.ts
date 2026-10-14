import { Content } from "./types";

export const enContent: Content = {
  meta: {
    title: "Caio Saboia — Portfolio",
    description: "Data Scientist focusing on Data Engineering, GenAI, LLM, and RAG systems.",
  },
  header: {
    name: "Caio Saboia",
    headline: "Data Scientist | Data Engineering, GenAI, LLM & RAG | Judoka",
    links: [
      { label: "GitHub", url: "https://github.com/caiosaboia" },
      { label: "Kaggle", url: "https://www.kaggle.com/caiosaboia" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/caiosaboia" },
      { label: "Email", url: "mailto:caiorubems@gmail.com" },
    ],
  },
  about: {
    title: "About",
    paragraphs: [
      "Data Science undergraduate at the Federal University of Ceara (UFC), specializing in Python software development, automated ETL data pipelines, and predictive rating systems applied to real-world datasets.",
      "Hands-on experience architecting autonomous agents, contextual retrieval-augmented generation (RAG) pipelines, and LLM orchestration with LangChain and CrewAI. Judo practitioner and dedicated terminal/Neovim workflow enthusiast.",
    ],
  },
  projects: {
    title: "Projects",
    items: [
      {
        title: "judo_data",
        description: "Asynchronous Python ETL pipeline for ingesting, transforming, and exporting official match and athlete records from the International Judo Federation (IJF).",
        highlight: "Asynchronous pipeline with httpx and columnar Parquet export",
        tags: ["Python", "Async Ingestion", "pandas", "Parquet", "SQLite", "SQL DDL"],
        links: [
          { label: "GitHub Repository", url: "https://github.com/caiosaboia/judo_data" },
        ],
      },
      {
        title: "ml-judo",
        description: "Judo analytics and predictive modeling platform featuring machine learning classifiers, dynamic Elo and Bayesian Glicko-2 ratings, and an interactive web simulator.",
        highlight: "ROC-AUC 0.7289 with LightGBM over 184,949 analyzed matches",
        tags: ["Machine Learning", "LightGBM", "Random Forest", "Glicko-2", "Streamlit", "Docker"],
        links: [
          { label: "GitHub Repository", url: "https://github.com/caiosaboia/ml-judo" },
        ],
      },
      {
        title: "Judo Matchs IJF Dataset",
        description: "Public Kaggle dataset aggregating historical and modern contests, match outcomes, scores, and athlete profiles from the IJF World Tour.",
        highlight: "184,949 matches and 21,715 ranked athletes",
        tags: ["Kaggle Dataset", "Judo", "Sports Analytics", "CSV", "Open Data"],
        links: [
          { label: "Kaggle Dataset", url: "https://www.kaggle.com/datasets/caiosaboia/judo-matchs-ijf-dataset" },
        ],
      },
    ],
  },
  skills: {
    title: "Skills",
    categories: [
      {
        name: "Languages & Tools",
        skills: ["Python", "SQL", "TypeScript", "Neovim", "Git", "Docker", "Astral uv"],
      },
      {
        name: "Data Engineering",
        skills: ["Async Ingestion", "Relational Modeling", "PostgreSQL", "SQLite", "BigQuery", "Parquet", "pandas"],
      },
      {
        name: "AI & Machine Learning",
        skills: ["LLMs", "LangChain", "CrewAI", "RAG", "LightGBM", "Random Forest", "Elo & Glicko-2 Ratings", "PyTorch"],
      },
      {
        name: "Quality & Testing",
        skills: ["Pytest", "DeepEval", "MLflow", "TDD", "Vitest", "CI/CD"],
      },
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        role: "GenAI Assistant",
        organization: "Profectum",
        period: "Jan 2026 - Present",
        summary: "Developing generative AI workflows, LLM orchestration with LangChain, and production retrieval-augmented generation (RAG) architectures.",
      },
      {
        role: "AI Developer Intern",
        organization: "Profectum",
        period: "Aug 2025 - Jan 2026",
        summary: "Constructing autonomous multi-agent systems with CrewAI, building BigQuery data pipelines, and evaluating models.",
      },
      {
        role: "Scientific Initiation Researcher",
        organization: "Federal University of Ceara",
        period: "Mar 2024 - Jul 2025",
        summary: "Research on parameterized complexity in chordal and temporal graphs with applications in discrete mathematics.",
      },
    ],
  },
  education: {
    title: "Education",
    items: [
      {
        text: "B.Sc. in Data Science — Federal University of Ceara (UFC), in progress",
      },
    ],
  },
  ui: {
    themeToggle: {
      ariaLabel: "Toggle light and dark theme",
    },
    languageSwitch: {
      targetLocale: "pt",
      label: "PT",
      ariaLabel: "Switch to Portuguese version",
    },
  },
};
