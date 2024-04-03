import { getBoolean } from "../index";

describe("Test getBoolean", () => {
  it("Should return true if input is true", () => {
    const inputString = true;
    const result = getBoolean(inputString);
    expect(result).toBe(true);
  });
  it("Should return false if input is false", () => {
    const inputString = false;
    const result = getBoolean(inputString);
    expect(result).toBe(false);
  });
  it("Should return true if input is true as string", () => {
    const inputString = "true";
    const result = getBoolean(inputString);
    expect(result).toBe(true);
  });
  it("Should return false if input is false as string", () => {
    const inputString = "false";
    const result = getBoolean(inputString);
    expect(result).toBe(false);
  });
  it("Should return true if input is true but uppercase", () => {
    const inputString = "TRUE";
    const result = getBoolean(inputString);
    expect(result).toBe(true);
  });
  it("Should return false if input is false but uppercase", () => {
    const inputString = "FALSE";
    const result = getBoolean(inputString);
    expect(result).toBe(false);
  });
  it("Should return false if input is empty", () => {
    const inputString = "";
    const result = getBoolean(inputString);
    expect(result).toBe(false);
  });
  it("Should return false if input is undefined", () => {
    const result = getBoolean(undefined);
    expect(result).toBe(false);
  });
});
