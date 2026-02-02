/// <reference types="vitest/globals" />
import { buildPrompt } from "./promptTemplate";

describe("Prompt Template", () => {
  test("buildPrompt replaces placeholders correctly", () => {
    const sport = "Tennis";
    const actions = ["Serve", "Forehand"];
    const prompt = buildPrompt(sport, actions);

    expect(prompt).toContain("expert Tennis coach");
    expect(prompt).toContain("practicing Tennis");
    expect(prompt).toContain("possible action types for Tennis are: Serve, Forehand");
  });
});
