import { describe, expect, it } from "vitest";
import Today from "../src/components/Today";

describe("Today component", () => {
  it("creates component factory function", () => {
    const Component = Today({ prefix: "TODAY", separator: ", " });
    expect(Component).toBeTypeOf("function");
    expect(Component.css).toBeDefined();
    expect(Component.afterDOMLoaded).toBeDefined();
  });
});
