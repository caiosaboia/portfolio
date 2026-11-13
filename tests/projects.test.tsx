import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Portfolio } from "../components/Portfolio";
import { ptContent } from "../content/pt";
import { enContent } from "../content/en";

describe("T5 — Projects Section and ProjectCard", () => {
  it("renders exactly four project cards with required data adhering to AC-07.1 and AC-07.2", () => {
    const { container } = render(<Portfolio content={ptContent} lang="pt" />);
    const articles = container.querySelectorAll("section#projects article");
    expect(articles).toHaveLength(4);

    const titles = Array.from(articles).map(
      (a) => a.querySelector("h3")?.textContent
    );
    expect(titles).toEqual([
      "agy-brain",
      "judo_data",
      "ml-judo",
      "Judo Matchs IJF Dataset",
    ]);

    for (const article of Array.from(articles)) {
      expect(article.querySelector("p")).not.toBeNull();
      expect(article.querySelector("span")).not.toBeNull();
      const tags = article.querySelectorAll("li");
      expect(tags.length).toBeGreaterThan(0);
      const links = article.querySelectorAll("a");
      expect(links.length).toBeGreaterThan(0);
    }
  });

  it("links to exact external URLs adhering to AC-07.3", () => {
    render(<Portfolio content={ptContent} lang="pt" />);

    const githubLinks = screen.getAllByRole("link", { name: "Repositório GitHub" });
    expect(githubLinks).toHaveLength(3);
    expect(githubLinks[0]).toHaveAttribute(
      "href",
      "https://github.com/caiosaboia/agy-brain"
    );
    expect(githubLinks[1]).toHaveAttribute(
      "href",
      "https://github.com/caiosaboia/judo_data"
    );
    expect(githubLinks[2]).toHaveAttribute(
      "href",
      "https://github.com/caiosaboia/ml-judo"
    );

    const kaggleLink = screen.getByRole("link", { name: "Dataset Kaggle" });
    expect(kaggleLink).toHaveAttribute(
      "href",
      "https://www.kaggle.com/datasets/caiosaboia/judo-matchs-ijf-dataset"
    );
  });

  it("renders correct localized highlights adhering to AC-07.4", () => {
    const { unmount } = render(<Portfolio content={ptContent} lang="pt" />);
    expect(screen.getByText(/ROC-AUC 0,7289/)).toBeInTheDocument();
    unmount();

    render(<Portfolio content={enContent} lang="en" />);
    expect(screen.getByText(/ROC-AUC 0.7289/)).toBeInTheDocument();
  });

  it("renders accessible rich media previews (img/video) adhering to updated AC-07 and AD-031", () => {
    const { container } = render(<Portfolio content={ptContent} lang="pt" />);
    const images = container.querySelectorAll("section#projects img");
    expect(images).toHaveLength(3);

    for (const img of Array.from(images)) {
      expect(img.getAttribute("alt")).toBeTruthy();
      expect(img.getAttribute("src")).toBeTruthy();
    }
  });

  it("renders 5 gallery tabs for ml-judo and switches active plot on click adhering to AD-032", async () => {
    const { fireEvent } = await import("@testing-library/react");
    render(<Portfolio content={ptContent} lang="pt" />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(5);

    const tabLabels = tabs.map((t) => t.textContent);
    expect(tabLabels).toEqual([
      "Curva ROC",
      "Evolução Elo",
      "Elo vs Winrate",
      "Distribuição Elo",
      "Top 10 Atletas",
    ]);

    // Initial state: first tab selected
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    expect(tabs[1]).toHaveAttribute("aria-selected", "false");
    expect(
      screen.getByText(/Desempenho preditivo do classificador LightGBM/)
    ).toBeInTheDocument();

    // Click second tab (Evolução Elo)
    fireEvent.click(tabs[1]);

    expect(tabs[1]).toHaveAttribute("aria-selected", "true");
    expect(tabs[0]).toHaveAttribute("aria-selected", "false");
    expect(
      screen.getByText(/Série temporal da trajetória e variação de rating/)
    ).toBeInTheDocument();
  });
});
