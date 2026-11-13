import { Content } from "./types";

export const ptContent: Content = {
  meta: {
    title: "Caio Saboia — Portfolio",
    description: "AI Engineer e Cientista de Dados focado em Engenharia de Dados, GenAI, LLM e RAG.",
  },
  header: {
    name: "Caio Saboia",
    headline: "AI Engineer | Data Scientist | GenAI | LLM | CrewAI | LangGraph | LLM Evaluate | RAG | SQL | Judoca",
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
      "Judoca",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/caiosaboia" },
      { label: "Kaggle", url: "https://www.kaggle.com/caiosaboia" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/caiosaboia" },
      { label: "Email", url: "mailto:caiorubems@gmail.com" },
    ],
  },
  about: {
    title: "Sobre",
    paragraphs: [
      "Graduando em Ciência de Dados pela Universidade Federal do Ceará (UFC), com atuação voltada ao desenvolvimento de assistentes corporativos com LangGraph, agentes autônomos com CrewAI, recuperação contextual (RAG) e engenharia de dados em larga escala.",
      "Experiência prática na construção de pipelines de ETL na GCP, persistência em PostgreSQL e modelagem preditiva em Python. Apaixonado por desenvolvimento em terminal com Neovim, testes rigorosos com TDD e judoca há mais de uma década.",
    ],
  },
  projects: {
    title: "Projetos",
    items: [
      {
        title: "agy-brain",
        description: "Navegador de terminal e inspetor de sessões para Antigravity CLI e Claude Code em Rust puro, com TUI interativa em Ratatui, integração universal com shells e zero dependências de runtime.",
        highlight: "100% Pure Rust, TUI interativa em Ratatui e suporte a Antigravity e Claude Code",
        tags: ["Rust", "CLI", "Ratatui", "TUI", "Developer Tools", "Open Source"],
        media: {
          type: "image",
          src: "/projects/agy-brain-demo.gif",
          alt: "Demonstração da interface TUI e navegação do agy-brain",
        },
        links: [
          { label: "Repositório GitHub", url: "https://github.com/caiosaboia/agy-brain" },
        ],
      },
      {
        title: "judo_data",
        description: "Pipeline ETL assíncrono em Python para ingestão, limpeza e exportação de dados oficiais de competições e atletas da Federação Internacional de Judô (IJF).",
        highlight: "Pipeline assíncrono com httpx e exportação colunar Parquet",
        tags: ["Python", "Ingestão Assíncrona", "pandas", "Parquet", "SQLite", "SQL DDL"],
        media: {
          type: "image",
          src: "/projects/judo-data-banner.jpg",
          alt: "Banner da pipeline de extração e processamento judo_data",
        },
        links: [
          { label: "Repositório GitHub", url: "https://github.com/caiosaboia/judo_data" },
        ],
      },
      {
        title: "ml-judo",
        description: "Plataforma analítica e preditiva para judô com classificadores de machine learning, sistemas de rating Elo e Glicko-2 bayesiano e simulador web interativo.",
        highlight: "ROC-AUC 0,7289 com LightGBM e 184.949 lutas analisadas",
        tags: ["Machine Learning", "LightGBM", "Random Forest", "Glicko-2", "Streamlit", "Docker"],
        media: {
          type: "image",
          src: "/projects/ml-judo-roc-curve.png",
          alt: "Curva ROC do modelo preditivo ml-judo com AUC 0,7289",
        },
        links: [
          { label: "Repositório GitHub", url: "https://github.com/caiosaboia/ml-judo" },
        ],
      },
      {
        title: "Judo Matchs IJF Dataset",
        description: "Dataset público publicado no Kaggle reunindo dados consolidados de combates, resultados, pontuações e perfis de atletas do circuito mundial da IJF.",
        highlight: "184.949 lutas e 21.715 atletas ranqueados",
        tags: ["Kaggle Dataset", "Judô", "Sports Analytics", "CSV", "Open Data"],
        links: [
          { label: "Dataset Kaggle", url: "https://www.kaggle.com/datasets/caiosaboia/judo-matchs-ijf-dataset" },
        ],
      },
    ],
  },
  skills: {
    title: "Habilidades",
    categories: [
      {
        name: "Linguagens & Ferramentas",
        skills: ["Python", "SQL", "Rust", "TypeScript", "Linguagem R", "Neovim", "Git", "Docker", "Astral uv", "GNU Linux"],
      },
      {
        name: "Engenharia de Dados",
        skills: ["ETL/ELT", "Ingestão Assíncrona", "Modelagem Relacional", "Data Warehousing", "PostgreSQL", "SQLite", "Google BigQuery", "Parquet", "GraphQL", "pandas"],
      },
      {
        name: "IA & Machine Learning",
        skills: ["LLMs", "LangGraph", "LangChain", "CrewAI", "RAG", "Qdrant", "FastAPI", "Scikit-Learn", "LightGBM", "Random Forest", "Ratings Elo e Glicko-2", "PyTorch"],
      },
      {
        name: "Qualidade & Testes",
        skills: ["Pytest", "DeepEval", "MLflow", "TDD", "Vitest", "CI/CD"],
      },
    ],
  },
  experience: {
    title: "Experiência",
    items: [
      {
        role: "Assistente de GenAI",
        organization: "Profectum",
        period: "jan. de 2026 - o momento",
        summary: "Construção de assistente de IA empresarial com LangGraph, Qdrant, FastAPI e Asana MCP com persistência em PostgreSQL (SDD/TDD). Desenvolvimento de plataforma de auditoria de fornecedores via ETL em GraphQL, dashboards em Streamlit/Power BI e suíte com mais de 500 testes em TDD.",
      },
      {
        role: "Estagiário AI Developer",
        organization: "Profectum",
        period: "ago. de 2025 - jan. de 2026",
        summary: "Criação de agentes autônomos utilizando CrewAI para análise de atendimento ao cliente, persistindo métricas no PostgreSQL para visualização no Power BI. Desenvolvimento de processos de ETL no GCP utilizando SQL avançado para dashboards complexos.",
      },
      {
        role: "Bolsista de Iniciação Científica",
        organization: "Universidade Federal do Ceará",
        period: "mar. de 2024 - jul. de 2025",
        summary: "Pesquisa em Complexidade Parametrizada em Grafos Cordais e Grafos Temporais com aplicações em matemática discreta e algoritmos exatos.",
      },
    ],
  },
  education: {
    title: "Formação",
    items: [
      {
        text: "Bacharelado em Ciência de Dados — Universidade Federal do Ceará (UFC), em andamento",
      },
    ],
  },
  ui: {
    themeToggle: {
      ariaLabel: "Alternar tema claro e escuro",
    },
    languageSwitch: {
      targetLocale: "en",
      label: "EN",
      ariaLabel: "Mudar para versão em inglês",
    },
  },
};
