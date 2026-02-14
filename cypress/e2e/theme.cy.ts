import { expect } from "chai";

const defaultTheme = "light";
const themeAftherChange = "dark";

describe("Theme test", () => {
  it("Click theme switch button and check it if changes and localStorage are correct", () => {
    cy.visit("/");

    cy.get('[data-cy="theme"]')
      .contains("DARK")
      .then(() => {
        expect(localStorage.getItem("theme")).equal(defaultTheme);
      });
    cy.get('[data-cy="theme"]').contains("DARK").click();

    expect(cy.get(".Toastify").contains("Dark"));
    expect(cy.get('[data-cy="theme"]').should("not.include.text", "DARK"));
    expect(cy.get('[data-cy="theme"]').should("contain", "LIGHT"));
    const bgColorRGB = "rgb(37, 33, 40)";
    cy.get("#root > div")
      .invoke("css", "background-color")
      .then((bgcolor) => {
        expect(bgcolor).equal(bgColorRGB);
        expect(localStorage.getItem("theme")).equal(themeAftherChange);
      });
  });
});
