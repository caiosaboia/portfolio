import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import { Portfolio } from "../components/Portfolio";
import { ptContent } from "../content/pt";
import { enContent } from "../content/en";

describe("T6 — Experience and Education Sections", () => {
  it("renders 3 experience items in strict reverse-chronological order for PT adhering to AC-08.1 and AC-08.2", () => {
    const { container } = render(<Portfolio content={ptContent} lang="pt" />);
    const items = container.querySelectorAll("section#experience article");
    expect(items).toHaveLength(3);

    const roles = Array.from(items).map((it) => it.querySelector("h3")?.textContent);
    expect(roles[0]).toContain("Assistente de GenAI");
    expect(roles[0]).toContain("Profectum");
    expect(roles[1]).toContain("Estagiario AI Developer");
    expect(roles[1]).toContain("Profectum");
    expect(roles[2]).toContain("Bolsista de Iniciacao Cientifica");
    expect(roles[2]).toContain("Universidade Federal do Ceara");

    const periods = Array.from(items).map((it) => it.querySelector("time")?.textContent);
    expect(periods[0]).toBe("jan. de 2026 - o momento");
    expect(periods[1]).toBe("ago. de 2025 - jan. de 2026");
    expect(periods[2]).toBe("mar. de 2024 - jul. de 2025");

    for (const item of Array.from(items)) {
      expect(item.querySelector("p")?.textContent).toBeTruthy();
    }
  });

  it("renders 3 experience items in strict reverse-chronological order for EN", () => {
    const { container } = render(<Portfolio content={enContent} lang="en" />);
    const items = container.querySelectorAll("section#experience article");
    expect(items).toHaveLength(3);

    const roles = Array.from(items).map((it) => it.querySelector("h3")?.textContent);
    expect(roles[0]).toContain("GenAI Assistant");
    expect(roles[1]).toContain("AI Developer Intern");
    expect(roles[2]).toContain("Scientific Initiation Researcher");

    const periods = Array.from(items).map((it) => it.querySelector("time")?.textContent);
    expect(periods[0]).toBe("Jan 2026 - Present");
    expect(periods[1]).toBe("Aug 2025 - Jan 2026");
    expect(periods[2]).toBe("Mar 2024 - Jul 2025");
  });

  it("renders a continuous timeline track where non-last items have connector lines and the last item terminates cleanly", () => {
    const { container } = render(<Portfolio content={ptContent} lang="pt" />);
    const items = container.querySelectorAll("section#experience article");
    expect(items).toHaveLength(3);

    // First two items have connector lines (w-px inside the track)
    expect(items[0].querySelector("div.w-px")).not.toBeNull();
    expect(items[1].querySelector("div.w-px")).not.toBeNull();
    // Last item does not render a dangling connector line
    expect(items[2].querySelector("div.w-px")).toBeNull();
  });

  it("renders education text exactly without any four-digit year adhering to AC-09.1", () => {
    const { container: ptContainer, unmount } = render(
      <Portfolio content={ptContent} lang="pt" />
    );
    const ptEdu = ptContainer.querySelector("section#education");
    expect(ptEdu).toHaveTextContent(
      "Bacharelado em Ciencia de Dados — Universidade Federal do Ceara (UFC), em andamento"
    );
    expect(/\b\d{4}\b/.test(ptEdu?.textContent || "")).toBe(false);
    unmount();

    const { container: enContainer } = render(
      <Portfolio content={enContent} lang="en" />
    );
    const enEdu = enContainer.querySelector("section#education");
    expect(enEdu).toHaveTextContent(
      "B.Sc. in Data Science — Federal University of Ceara (UFC), in progress"
    );
    expect(/\b\d{4}\b/.test(enEdu?.textContent || "")).toBe(false);
  });
});
