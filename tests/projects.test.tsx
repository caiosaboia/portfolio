import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Portfolio } from "../components/Portfolio";
import { ptContent } from "../content/pt";
import { enContent } from "../content/en";

describe("T5 — Projects Section and ProjectCard", () => {
  it("renders exactly three project cards with required data adhering to AC-07.1 and AC-07.2", () => {
    const { container } = render(<Portfolio content={ptContent} lang="pt" />);
    const articles = container.querySelectorAll("section#projects article");
    expect(articles).toHaveLength(3);

    const titles = Array.from(articles).map(
      (a) => a.querySelector("h3")?.textContent
    );
    expect(titles).toEqual([
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

    const githubLinks = screen.getAllByRole("link", { name: "Repositorio GitHub" });
    expect(githubLinks).toHaveLength(2);
    expect(githubLinks[0]).toHaveAttribute(
      "href",
      "https://github.com/caiosaboia/judo_data"
    );
    expect(githubLinks[1]).toHaveAttribute(
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

  it("renders no img elements adhering to AC-11.4", () => {
    const { container } = render(<Portfolio content={ptContent} lang="pt" />);
    const images = container.querySelectorAll("img");
    expect(images).toHaveLength(0);
  });
});
