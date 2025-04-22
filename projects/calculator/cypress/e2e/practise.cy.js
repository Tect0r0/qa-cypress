describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/");
    // 3 Zanahorias
    cy.get(".search-keyword").type("carrot");
    cy.wait(1000);
    cy.get(".increment")
      .click()
      .click();
    cy.get(".product-action").click();
    // 5 Broccolis
    cy.get(".search-keyword")
      .clear()
      .type("brocolli");
    cy.wait(1000);
    cy.get(".increment")
      .click()
      .click();
    cy.get(".product-action").click();
    // 8 Manzanas
    cy.get(".search-keyword")
      .clear()
      .type("apple");
    cy.wait(1000);
    cy.get(".increment")
      .click()
      .click()
      .click();
    cy.get(".product-action").click();
    cy.get(".cart-icon").click();
    cy.wait(500);
    cy.get(".cart-preview > .action-block > button").click();
    cy.wait(1500);
    cy.get(
      '[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(14)',
    ).click();
    cy.wait(500);
    cy.get("select").select("Mexico");
    cy.get(".chkAgree").click();
    cy.wait(100);
    cy.get("button").click();
  });
});
