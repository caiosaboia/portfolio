import { describe, it, expect } from "vitest";
import nextConfig from "../next.config";

describe("next.config", () => {
  it("declares output export and trailingSlash true", () => {
    expect(nextConfig.output).toBe("export");
    expect(nextConfig.trailingSlash).toBe(true);
    expect(nextConfig.images?.unoptimized).toBe(true);
  });
});
