import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import React from "react";
import { ScrollReveal } from "../components/ScrollReveal";

describe("ScrollReveal Component", () => {
  let observerCallback: (entries: { isIntersecting: boolean }[]) => void;
  let disconnectMock = vi.fn();
  let observeMock = vi.fn();

  beforeEach(() => {
    disconnectMock = vi.fn();
    observeMock = vi.fn();

    class MockIntersectionObserver {
      constructor(callback: (entries: { isIntersecting: boolean }[]) => void) {
        observerCallback = callback;
      }
      observe = observeMock;
      disconnect = disconnectMock;
      unobserve = vi.fn();
    }

    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("renders children content correctly", () => {
    render(
      <ScrollReveal>
        <p>Conteudo revelado</p>
      </ScrollReveal>
    );

    expect(screen.getByText("Conteudo revelado")).toBeInTheDocument();
  });

  it("toggles visible classes bi-directionally based on intersection", () => {
    const { container } = render(
      <ScrollReveal delay={100}>
        <div data-testid="target">Card item</div>
      </ScrollReveal>
    );

    const wrapper = container.firstElementChild as HTMLElement;

    // Simulate intersecting (scrolling into view)
    act(() => {
      observerCallback([{ isIntersecting: true }]);
    });
    expect(wrapper.className).toContain("opacity-100");
    expect(wrapper.className).toContain("translate-y-0");
    expect(wrapper.style.transitionDelay).toBe("100ms");

    // Simulate leaving viewport (scrolling out of view)
    act(() => {
      observerCallback([{ isIntersecting: false }]);
    });
    expect(wrapper.className).toContain("opacity-0");
    expect(wrapper.className).toContain("translate-y-6");
  });

  it("renders with motion-safe classes for reduced motion compliance", () => {
    const { container } = render(
      <ScrollReveal>
        <p>Acessibilidade</p>
      </ScrollReveal>
    );

    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.className).toContain("motion-safe:transition-all");
    expect(wrapper.className).toContain("motion-safe:duration-500");
  });
});
