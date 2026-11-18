import { Content } from "./types";

export const enContent: Content = {
  meta: {
    title: "Caio Saboia — Portfolio",
    description: "AI Engineer and Data Scientist focusing on Data Engineering, GenAI, LLM, and RAG systems.",
  },
  header: {
    name: "Caio Saboia",
    headline: "AI Engineer | Data Scientist | GenAI | LLM | CrewAI | LangGraph | LLM Evaluate | RAG | SQL | Judoka",
    tags: [
      "AI Engineer",
      "Data Scientist",
      "GenAI",
      "LLM",
      "CrewAI",
      "LangGraph",
      "LLM Evaluate",
      "RAG",
      "SQL",
      "Judoka",
    ],
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
      "B.Sc. student in Data Science at the Federal University of Ceara (UFC), focused on developing enterprise AI assistants with LangGraph, autonomous multi-agent systems with CrewAI, production RAG, and large-scale data engineering.",
      "Hands-on experience building GCP data pipelines, PostgreSQL persistence, and predictive modeling in Python. Passionate about terminal-first workflows with Neovim, rigorous TDD, and a dedicated Judoka.",
    ],
  },
  projects: {
    title: "Projects",
    items: [
      {
        title: "agy-brain",
        description: "Terminal navigator and session inspector for Antigravity CLI and Claude Code in 100% Pure Rust, featuring an interactive Ratatui TUI, universal shell integration, and zero runtime dependencies.",
        highlight: "100% Pure Rust, interactive Ratatui TUI, and dual Antigravity / Claude Code support",
        tags: ["Rust", "CLI", "Ratatui", "TUI", "Developer Tools", "Open Source"],
        media: {
          type: "image",
          src: "/projects/agy-brain-demo.gif",
          alt: "Interactive TUI demo and session inspection of agy-brain",
        },
        links: [
          { label: "GitHub Repository", url: "https://github.com/caiosaboia/agy-brain" },
        ],
      },
      {
        title: "judo_data",
        description: "Asynchronous Python ETL pipeline for ingesting, transforming, and exporting official match and athlete records from the International Judo Federation (IJF).",
        highlight: "Asynchronous pipeline with httpx and columnar Parquet export",
        tags: ["Python", "Async Ingestion", "pandas", "Parquet", "SQLite", "SQL DDL"],
        media: {
          type: "image",
          src: "/projects/judo-data-demo.gif",
          alt: "Live execution demo of the asynchronous judo_data ETL pipeline",
          label: "Demo",
          caption: "Execution of the asynchronous ETL pipeline with httpx and data processing",
        },
        gallery: [
          {
            type: "image",
            src: "/projects/judo-data-demo.gif",
            alt: "Live execution demo of the asynchronous judo_data ETL pipeline",
            label: "Demo",
            caption: "Execution of the asynchronous ETL pipeline with httpx and data processing",
          },
          {
            type: "image",
            src: "/projects/judo-data-banner.jpg",
            alt: "Architecture banner for the judo_data ETL pipeline",
            label: "Architecture",
            caption: "Architecture diagram and IJF data ingestion workflow",
          },
        ],
        links: [
          { label: "GitHub Repository", url: "https://github.com/caiosaboia/judo_data" },
        ],
      },
      {
        title: "ml-judo",
        description: "Judo analytics and predictive modeling platform featuring machine learning classifiers, dynamic Elo and Bayesian Glicko-2 ratings, and an interactive web simulator.",
        highlight: "ROC-AUC 0.7289 with LightGBM over 184,949 analyzed matches",
        tags: ["Machine Learning", "LightGBM", "Random Forest", "Glicko-2", "Streamlit", "Docker"],
        media: {
          type: "image",
          src: "/projects/ml-judo-roc-curve.png",
          alt: "ROC curve of the ml-judo predictive classifier with AUC 0.7289",
          label: "ROC Curve",
          caption: "Predictive performance of LightGBM classifier with ROC-AUC score of 0.7289",
        },
        gallery: [
          {
            type: "image",
            src: "/projects/ml-judo-roc-curve.png",
            alt: "ROC curve of the ml-judo predictive classifier with AUC 0.7289",
            label: "ROC Curve",
            caption: "Predictive performance of LightGBM classifier with ROC-AUC score of 0.7289",
          },
          {
            type: "image",
            src: "/projects/ml-judo-elo-evolution.png",
            alt: "Time series tracking rating dynamics and trajectory of top athletes over tournament seasons",
            label: "Elo Evolution",
            caption: "Time series tracking rating dynamics and trajectory of top athletes over tournament seasons",
          },
          {
            type: "image",
            src: "/projects/ml-judo-elo-diff-winrate.png",
            alt: "Empirical validation curve matching athlete rating differentials to actual contest win rates",
            label: "Elo vs Winrate",
            caption: "Empirical validation curve matching athlete rating differentials to actual contest win rates",
          },
          {
            type: "image",
            src: "/projects/ml-judo-elo-distribution.png",
            alt: "Statistical density curve of Elo ratings calculated across 21,715 competitive judoka",
            label: "Elo Distribution",
            caption: "Statistical density curve of Elo ratings calculated across 21,715 competitive judoka",
          },
          {
            type: "image",
            src: "/projects/ml-judo-top10-athletes.png",
            alt: "Ranking of top 10 historical peak rating indexes recorded in the international circuit",
            label: "Top 10 Athletes",
            caption: "Ranking of top 10 historical peak rating indexes recorded in the international circuit",
          },
        ],
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
        skills: ["Python", "SQL", "Rust", "TypeScript", "R Language", "Neovim", "Git", "Docker", "Astral uv", "GNU Linux"],
      },
      {
        name: "Data Engineering",
        skills: ["ETL/ELT", "Async Ingestion", "Relational Modeling", "Data Warehousing", "PostgreSQL", "SQLite", "Google BigQuery", "Parquet", "GraphQL", "pandas"],
      },
      {
        name: "AI & Machine Learning",
        skills: ["LLMs", "LangGraph", "LangChain", "CrewAI", "RAG", "Qdrant", "FastAPI", "Scikit-Learn", "LightGBM", "Random Forest", "Elo & Glicko-2 Ratings", "PyTorch"],
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
        summary: "Building enterprise AI assistants with LangGraph, Qdrant, FastAPI, and Asana MCP with PostgreSQL persistence using SDD/TDD. Developing a vendor audit platform via GraphQL ETL, Streamlit/Power BI dashboards, and a 500+ test suite in TDD.",
      },
      {
        role: "AI Developer Intern",
        organization: "Profectum",
        period: "Aug 2025 - Jan 2026",
        summary: "Creating autonomous multi-agent systems with CrewAI for customer support analysis, storing metrics in PostgreSQL for Power BI visualization. Developing GCP ETL pipelines with advanced SQL for complex dashboards.",
      },
      {
        role: "Scientific Initiation Researcher",
        organization: "Federal University of Ceara",
        period: "Mar 2024 - Jul 2025",
        summary: "Research on Parameterized Complexity in Chordal and Temporal Graphs with applications in discrete mathematics and exact algorithms.",
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
