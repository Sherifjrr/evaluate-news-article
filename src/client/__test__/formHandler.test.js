import "babel-polyfill";
import handleSubmit from "../js/formHandler";

describe("Testing The submit functionality", () => {
  test("Testing handleSubmit() function", () => {
    expect(handleSubmit).toBeDefined();
  });
});
