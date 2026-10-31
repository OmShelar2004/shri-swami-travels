import { describe, expect, it } from "vitest";
import { siteConfig } from "@/config/site";

describe("siteConfig", () => {
  it("keeps the official business name and supported contact numbers", () => {
    expect(siteConfig.name).toBe("Shri Swami Travels");
    expect(siteConfig.contactNumbers).toHaveLength(3);
  });
});
