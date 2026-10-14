import { Content } from "./types";

export const ptContent: Content = {
  meta: {
    title: "Caio Saboia — Portfolio",
    description: "Cientista de Dados focado em Engenharia de Dados, GenAI, LLM e RAG.",
  },
  header: {
    name: "Caio Saboia",
    headline: "Cientista de Dados | Engenharia de Dados, GenAI, LLM e RAG | Judoca",
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
      "Graduando em Ciencia de Dados pela Universidade Federal do Ceara (UFC), com atuacao voltada ao desenvolvimento de assistentes corporativos com LangGraph, agentes autonomos com CrewAI, recuperacao contextual (RAG) e engenharia de dados em larga escala.",
      "Experiencia pratica na construcao de pipelines de ETL na GCP, persistencia em PostgreSQL e modelagem preditiva em Python. Apaixonado por desenvolvimento em terminal com Neovim, testes rigorosos com TDD e judoca ha mais de uma decada.",
    ],
  },
  projects: {
    title: "Projetos",
    items: [
      {
        title: "judo_data",
        description: "Pipeline ETL assincrono em Python para ingestao, limpeza e exportacao de dados oficiais de competicoes e atletas da Federacao Internacional de Judo (IJF).",
        highlight: "Pipeline assincrono com httpx e exportacao colunar Parquet",
        tags: ["Python", "Ingestao Assincrona", "pandas", "Parquet", "SQLite", "SQL DDL"],
        links: [
          { label: "Repositorio GitHub", url: "https://github.com/caiosaboia/judo_data" },
        ],
      },
      {
        title: "ml-judo",
        description: "Plataforma analitica e preditiva para judo com classificadores de machine learning, sistemas de rating Elo e Glicko-2 bayesiano e simulador web interativo.",
        highlight: "ROC-AUC 0,7289 com LightGBM e 184.949 lutas analisadas",
        tags: ["Machine Learning", "LightGBM", "Random Forest", "Glicko-2", "Streamlit", "Docker"],
        links: [
          { label: "Repositorio GitHub", url: "https://github.com/caiosaboia/ml-judo" },
        ],
      },
      {
        title: "Judo Matchs IJF Dataset",
        description: "Dataset publico publicado no Kaggle reunindo dados consolidados de combates, resultados, pontuacoes e perfis de atletas do circuito mundial da IJF.",
        highlight: "184.949 lutas e 21.715 atletas ranqueados",
        tags: ["Kaggle Dataset", "Judo", "Sports Analytics", "CSV", "Open Data"],
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
        skills: ["Python", "SQL", "TypeScript", "Linguagem R", "Neovim", "Git", "Docker", "Astral uv", "GNU Linux"],
      },
      {
        name: "Engenharia de Dados",
        skills: ["ETL/ELT", "Ingestao Assincrona", "Modelagem Relacional", "Data Warehousing", "PostgreSQL", "SQLite", "Google BigQuery", "Parquet", "GraphQL", "pandas"],
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
    title: "Experiencia",
    items: [
      {
        role: "Assistente de GenAI",
        organization: "Profectum",
        period: "jan. de 2026 - o momento",
        summary: "Construcao de assistente de IA empresarial com LangGraph, Qdrant, FastAPI e Asana MCP com persistencia em PostgreSQL (SDD/TDD). Desenvolvimento de plataforma de auditoria de fornecedores via ETL em GraphQL, dashboards em Streamlit/Power BI e suite com mais de 500 testes em TDD.",
      },
      {
        role: "Estagiario AI Developer",
        organization: "Profectum",
        period: "ago. de 2025 - jan. de 2026",
        summary: "Criacao de agentes autonomos utilizando CrewAI para analise de atendimento ao cliente, persistindo metricas no PostgreSQL para visualizacao no Power BI. Desenvolvimento de processos de ETL no GCP utilizando SQL avancado para dashboards complexos.",
      },
      {
        role: "Bolsista de Iniciacao Cientifica",
        organization: "Universidade Federal do Ceara",
        period: "mar. de 2024 - jul. de 2025",
        summary: "Pesquisa em Complexidade Parametrizada em Grafos Cordais e Grafos Temporais com aplicacoes em matematica discreta e algoritmos exatos.",
      },
    ],
  },
  education: {
    title: "Formacao",
    items: [
      {
        text: "Bacharelado em Ciencia de Dados — Universidade Federal do Ceara (UFC), em andamento",
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
      ariaLabel: "Mudar para versao em ingles",
    },
  },
};
