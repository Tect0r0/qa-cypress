describe("JWT Session", () => {
  it("is logged", () => {
    cy.fixture("credentials").then(data => {
      cy.LoginAPI(data.usr, data.psw).then(() => {
        cy.visit("https://rahulshettyacademy.com/client/", {
          onBeforeLoad: function(window) {
            window.localStorage.setItem("token", Cypress.env("token"));
          },
        });
      });
    });
    cy.get(".card-body button:last-of-type");
  });
});
