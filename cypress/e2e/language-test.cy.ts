/// <reference types="cypress" />
import { expect } from "chai";

const defaultLanguage = "en";
const LanguageAftherChange = "tr";

describe("Language tests", () => {
  it("Click language button and check it if changes and localStorage are correct", () => {
    cy.visit("/");
    cy.get('[data-cy="language"]').contains("TÜRKÇE").then(()=>{
      expect(localStorage.getItem("language")).equal(defaultLanguage);
    })
    cy.get('[data-cy="language"]').contains("TÜRKÇE").click();
    expect(cy.get(".Toastify").contains("Türkçe"));
    expect(cy.get('[data-cy="language"]').should("not.include.text", "TÜRKÇE"));
    expect(cy.get('[data-cy="language"]').should("contain", "ENGLISH").then(()=>{
      expect(localStorage.getItem("language")).equal(LanguageAftherChange);
    }));
  });
});
