/**
 * Converts the input value into a boolean.
 * If the input is already a boolean, it is returned as is.
 * If the input is a string, it is trimmed and converted to lowercase,
 * and then compared with the string "true". Returns true if it matches, false otherwise.
 * If the input is undefined or falsy, returns false.
 *
 * @param input - The input value to be converted to a boolean.
 * @returns The boolean representation of the input value.
 */
export const getBoolean = (input: boolean | string | undefined): boolean => {
  if (!input) {
    return false;
  }
  if (typeof input === "boolean") {
    return input;
  }
  return input.trim().toLowerCase() === "true";
};
