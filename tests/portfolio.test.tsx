import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Portfolio } from "../components/Portfolio";
import { ptContent } from "../content/pt";
import { enContent } from "../content/en";

describe("Portfolio Component & Section Ordering", () => {
  it("renders single h1 and sections in order for PT", () => {
    const { container } = render(<Portfolio content={ptContent} lang="pt" />);

    const h1Elements = screen.getAllByRole("heading", { level: 1 });
    expect(h1Elements).toHaveLength(1);
    expect(h1Elements[0]).toHaveTextContent("Caio Saboia");

    const h2Elements = screen.getAllByRole("heading", { level: 2 });
    expect(h2Elements).toHaveLength(5);
    expect(h2Elements.map((h) => h.textContent)).toEqual([
      "Sobre",
      "Projetos",
      "Habilidades",
      "Experiencia",
      "Formacao",
    ]);

    const sections = container.querySelectorAll("section");
    expect(sections).toHaveLength(5);
    const sectionIds = Array.from(sections).map((s) => s.getAttribute("id"));
    expect(sectionIds).toEqual([
      "about",
      "projects",
      "skills",
      "experience",
      "education",
    ]);
  });

  it("renders single h1 and sections in order for EN", () => {
    const { container } = render(<Portfolio content={enContent} lang="en" />);

    const h1Elements = screen.getAllByRole("heading", { level: 1 });
    expect(h1Elements).toHaveLength(1);
    expect(h1Elements[0]).toHaveTextContent("Caio Saboia");

    const h2Elements = screen.getAllByRole("heading", { level: 2 });
    expect(h2Elements).toHaveLength(5);
    expect(h2Elements.map((h) => h.textContent)).toEqual([
      "About",
      "Projects",
      "Skills",
      "Experience",
      "Education",
    ]);

    const sections = container.querySelectorAll("section");
    expect(sections).toHaveLength(5);
    const sectionIds = Array.from(sections).map((s) => s.getAttribute("id"));
    expect(sectionIds).toEqual([
      "about",
      "projects",
      "skills",
      "experience",
      "education",
    ]);
  });
});
