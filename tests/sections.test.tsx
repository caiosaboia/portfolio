import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Portfolio } from "../components/Portfolio";
import { ptContent } from "../content/pt";
import { enContent } from "../content/en";

describe("T4 — Header, About and Skills Sections", () => {
  it("renders single h1 with author name adhering to AC-05.1", () => {
    render(<Portfolio content={ptContent} lang="pt" />);
    const h1s = screen.getAllByRole("heading", { level: 1 });
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toHaveTextContent("Caio Saboia");
  });

  it("renders exact headlines and tags adhering to AC-05.2", () => {
    const { container: ptContainer, unmount } = render(
      <Portfolio content={ptContent} lang="pt" />
    );
    const ptHeader = ptContainer.querySelector("header");
    expect(ptHeader).not.toBeNull();
    expect(
      screen.getByText("Data Scientist | GenAI | LLM | CrewAI | LLM Evaluate | RAG | SQL | Judoca")
    ).toBeInTheDocument();
    expect(ptHeader?.textContent).toContain("Data Scientist");
    expect(ptHeader?.textContent).toContain("CrewAI");
    expect(ptHeader?.textContent).toContain("LLM Evaluate");
    expect(ptHeader?.textContent).toContain("Judoca");
    unmount();

    const { container: enContainer } = render(
      <Portfolio content={enContent} lang="en" />
    );
    const enHeader = enContainer.querySelector("header");
    expect(enHeader).not.toBeNull();
    expect(
      screen.getByText("Data Scientist | GenAI | LLM | CrewAI | LLM Evaluate | RAG | SQL | Judoka")
    ).toBeInTheDocument();
    expect(enHeader?.textContent).toContain("Judoka");
  });

  it("renders 4 links with correct hrefs, target and rel adhering to AC-05.3 and AC-05.4", () => {
    render(<Portfolio content={ptContent} lang="pt" />);
    const links = screen.getAllByRole("link");

    const github = links.find((l) => l.getAttribute("href") === "https://github.com/caiosaboia");
    const kaggle = links.find((l) => l.getAttribute("href") === "https://www.kaggle.com/caiosaboia");
    const linkedin = links.find(
      (l) => l.getAttribute("href") === "https://www.linkedin.com/in/caiosaboia"
    );
    const email = links.find((l) => l.getAttribute("href") === "mailto:caiorubems@gmail.com");

    expect(github).toBeDefined();
    expect(kaggle).toBeDefined();
    expect(linkedin).toBeDefined();
    expect(email).toBeDefined();

    expect(github?.getAttribute("target")).toBe("_blank");
    expect(github?.getAttribute("rel")).toBe("noopener noreferrer");
    expect(kaggle?.getAttribute("target")).toBe("_blank");
    expect(kaggle?.getAttribute("rel")).toBe("noopener noreferrer");
    expect(linkedin?.getAttribute("target")).toBe("_blank");
    expect(linkedin?.getAttribute("rel")).toBe("noopener noreferrer");
    // mailto should not have target=_blank
    expect(email?.getAttribute("target")).toBeNull();
  });

  it("renders skills grouped into labeled categories in plain text adhering to AC-10.1", () => {
    const { container } = render(<Portfolio content={ptContent} lang="pt" />);
    const skillsSection = container.querySelector("#skills")!;
    expect(skillsSection).toBeInTheDocument();

    for (const cat of ptContent.skills.categories) {
      expect(skillsSection).toHaveTextContent(cat.name);
      for (const skill of cat.skills) {
        expect(skillsSection).toHaveTextContent(skill);
      }
    }
  });

  it("maintains a maximum content width of max-w-3xl adhering to AC-12.1", () => {
    const { container } = render(<Portfolio content={ptContent} lang="pt" />);
    const main = container.querySelector("main");
    expect(main).toHaveClass("max-w-3xl");
  });
});
