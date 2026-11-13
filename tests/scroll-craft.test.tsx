import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { ScrollCraftProgress } from "../components/ScrollCraftProgress";
import { ScrollSpyNav } from "../components/ScrollSpyNav";

describe("Scroll-Craft Components", () => {
  describe("ScrollCraftProgress", () => {
    it("renders progress bar element with aria-hidden", () => {
      const { container } = render(<ScrollCraftProgress />);
      const wrapper = container.querySelector('div[aria-hidden="true"]');
      expect(wrapper).toBeInTheDocument();
      expect(wrapper).toHaveClass("fixed top-0");
    });

    it("initializes progress bar inner indicator", () => {
      const { container } = render(<ScrollCraftProgress />);
      const bar = container.querySelector('div[aria-hidden="true"] > div') as HTMLElement;
      expect(bar).toBeInTheDocument();
      expect(bar.style.width).toBe("0%");
    });
  });

  describe("ScrollSpyNav", () => {
    const mockLabels = {
      about: "Sobre",
      projects: "Projetos",
      skills: "Habilidades",
      experience: "Experiência",
      education: "Formação",
    };

    it("renders navigation with correct links and localized aria-label", () => {
      render(<ScrollSpyNav lang="pt" sectionLabels={mockLabels} />);
      const nav = screen.getByRole("navigation", { name: "Navegação rápida por seções" });
      expect(nav).toBeInTheDocument();

      const links = screen.getAllByRole("link");
      expect(links).toHaveLength(5);
      expect(links[0]).toHaveAttribute("href", "#about");
      expect(links[1]).toHaveAttribute("href", "#projects");
      expect(links[2]).toHaveAttribute("href", "#skills");
      expect(links[3]).toHaveAttribute("href", "#experience");
      expect(links[4]).toHaveAttribute("href", "#education");
    });

    it("renders English aria-label when lang is en", () => {
      render(
        <ScrollSpyNav
          lang="en"
          sectionLabels={{
            about: "About",
            projects: "Projects",
            skills: "Skills",
            experience: "Experience",
            education: "Education",
          }}
        />
      );
      const nav = screen.getByRole("navigation", { name: "Quick section navigation" });
      expect(nav).toBeInTheDocument();
    });

    it("smoothly scrolls to target on click", () => {
      const scrollIntoViewMock = vi.fn();
      const mockElement = document.createElement("div");
      mockElement.id = "projects";
      mockElement.scrollIntoView = scrollIntoViewMock;
      document.body.appendChild(mockElement);

      render(<ScrollSpyNav lang="pt" sectionLabels={mockLabels} />);
      const projectsLink = screen.getByRole("link", { name: "Projetos" });
      fireEvent.click(projectsLink);

      expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth" });
      document.body.removeChild(mockElement);
    });

    it("immediately activates the clicked section link via optimistic update adhering to AD-033", () => {
      const scrollIntoViewMock = vi.fn();
      const aboutElement = document.createElement("div");
      aboutElement.id = "about";
      document.body.appendChild(aboutElement);

      const educationElement = document.createElement("div");
      educationElement.id = "education";
      educationElement.scrollIntoView = scrollIntoViewMock;
      Object.defineProperty(educationElement, "offsetTop", { value: 3000, configurable: true });
      document.body.appendChild(educationElement);

      render(<ScrollSpyNav lang="pt" sectionLabels={mockLabels} />);
      const educationLink = screen.getByRole("link", { name: "Formação" });

      expect(educationLink.className).not.toContain("bg-zinc-900");

      fireEvent.click(educationLink);

      expect(educationLink.className).toContain("bg-zinc-900");
      expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth" });

      document.body.removeChild(aboutElement);
      document.body.removeChild(educationElement);
    });

    it("activates education section when scrolled near the bottom of the page adhering to AD-033", () => {
      render(<ScrollSpyNav lang="pt" sectionLabels={mockLabels} />);
      const educationLink = screen.getByRole("link", { name: "Formação" });

      Object.defineProperty(window, "innerHeight", { writable: true, configurable: true, value: 800 });
      Object.defineProperty(window, "scrollY", { writable: true, configurable: true, value: 2200 });
      Object.defineProperty(document.documentElement, "scrollHeight", { writable: true, configurable: true, value: 3000 });

      fireEvent.scroll(window);

      expect(educationLink.className).toContain("bg-zinc-900");
    });
  });
});
