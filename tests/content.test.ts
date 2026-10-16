import { describe, it, expect } from "vitest";
import { ptContent } from "../content/pt";
import { enContent } from "../content/en";

function compareStructure(a: unknown, b: unknown, path = "root"): void {
  if (Array.isArray(a) && Array.isArray(b)) {
    expect(a.length, `Array length mismatch at ${path}`).toBe(b.length);
    for (let i = 0; i < a.length; i++) {
      compareStructure(a[i], b[i], `${path}[${i}]`);
    }
    return;
  }

  if (typeof a === "object" && a !== null && typeof b === "object" && b !== null) {
    const keysA = Object.keys(a as Record<string, unknown>).sort();
    const keysB = Object.keys(b as Record<string, unknown>).sort();
    expect(keysA, `Keys mismatch at ${path}`).toEqual(keysB);
    for (const key of keysA) {
      compareStructure(
        (a as Record<string, unknown>)[key],
        (b as Record<string, unknown>)[key],
        `${path}.${key}`
      );
    }
    return;
  }

  expect(typeof a, `Type mismatch at ${path}`).toBe(typeof b);
}

function collectAllStrings(obj: unknown): string[] {
  const strings: string[] = [];
  function traverse(item: unknown) {
    if (typeof item === "string") {
      strings.push(item);
    } else if (Array.isArray(item)) {
      for (const el of item) {
        traverse(el);
      }
    } else if (typeof item === "object" && item !== null) {
      for (const val of Object.values(item)) {
        traverse(val);
      }
    }
  }
  traverse(obj);
  return strings;
}

describe("Content Integrity & Parity", () => {
  it("has identical structure and array lengths across PT and EN", () => {
    compareStructure(ptContent, enContent);
  });

  it("contains no emoji characters in PT or EN content", () => {
    const emojiRegex = /\p{Extended_Pictographic}/u;
    const ptStrings = collectAllStrings(ptContent);
    const enStrings = collectAllStrings(enContent);

    for (const str of [...ptStrings, ...enStrings]) {
      expect(emojiRegex.test(str), `Found emoji in: "${str}"`).toBe(false);
    }
  });

  it("has exact headlines adhering to AC-05.2", () => {
    expect(ptContent.header.headline).toBe(
      "Data Scientist | GenAI | LLM | CrewAI | LLM Evaluate | RAG | SQL | Judoca"
    );
    expect(enContent.header.headline).toBe(
      "Data Scientist | GenAI | LLM | CrewAI | LLM Evaluate | RAG | SQL | Judoka"
    );
    expect(ptContent.header.tags).toEqual([
      "Data Scientist",
      "GenAI",
      "LLM",
      "CrewAI",
      "LLM Evaluate",
      "RAG",
      "SQL",
      "Judoca",
    ]);
    expect(enContent.header.tags).toEqual([
      "Data Scientist",
      "GenAI",
      "LLM",
      "CrewAI",
      "LLM Evaluate",
      "RAG",
      "SQL",
      "Judoka",
    ]);
  });

  it("has exact social and contact links adhering to AC-05.3", () => {
    const expectedUrls = [
      "https://github.com/caiosaboia",
      "https://www.kaggle.com/caiosaboia",
      "https://www.linkedin.com/in/caiosaboia",
      "mailto:caiorubems@gmail.com",
    ];

    expect(ptContent.header.links.map((l) => l.url)).toEqual(expectedUrls);
    expect(enContent.header.links.map((l) => l.url)).toEqual(expectedUrls);
  });

  it("has exact project links and highlights adhering to AC-07.1, 07.3 and 07.4", () => {
    expect(ptContent.projects.items).toHaveLength(3);
    expect(enContent.projects.items).toHaveLength(3);

    const [ptJudoData, ptMlJudo, ptKaggle] = ptContent.projects.items;
    const [enJudoData, enMlJudo, enKaggle] = enContent.projects.items;

    expect(ptJudoData.links[0].url).toBe("https://github.com/caiosaboia/judo_data");
    expect(enJudoData.links[0].url).toBe("https://github.com/caiosaboia/judo_data");

    expect(ptMlJudo.links[0].url).toBe("https://github.com/caiosaboia/ml-judo");
    expect(enMlJudo.links[0].url).toBe("https://github.com/caiosaboia/ml-judo");

    expect(ptKaggle.links[0].url).toBe(
      "https://www.kaggle.com/datasets/caiosaboia/judo-matchs-ijf-dataset"
    );
    expect(enKaggle.links[0].url).toBe(
      "https://www.kaggle.com/datasets/caiosaboia/judo-matchs-ijf-dataset"
    );

    expect(ptMlJudo.highlight).toContain("0,7289");
    expect(enMlJudo.highlight).toContain("0.7289");
  });

  it("has exact education copy without years adhering to AC-09.1", () => {
    expect(ptContent.education.items[0].text).toBe(
      "Bacharelado em Ciencia de Dados — Universidade Federal do Ceara (UFC), em andamento"
    );
    expect(enContent.education.items[0].text).toBe(
      "B.Sc. in Data Science — Federal University of Ceara (UFC), in progress"
    );

    const yearRegex = /\b\d{4}\b/;
    expect(yearRegex.test(ptContent.education.items[0].text)).toBe(false);
    expect(yearRegex.test(enContent.education.items[0].text)).toBe(false);
  });

  it("has correct language switch configurations adhering to AC-03.2", () => {
    expect(ptContent.ui.languageSwitch.targetLocale).toBe("en");
    expect(ptContent.ui.languageSwitch.label).toBe("EN");

    expect(enContent.ui.languageSwitch.targetLocale).toBe("pt");
    expect(enContent.ui.languageSwitch.label).toBe("PT");
  });
});
