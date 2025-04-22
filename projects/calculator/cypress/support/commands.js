// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("LoginAPI", (usr, psw) => {
  cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login", {
    userEmail: usr,
    userPassword: psw,
  }).then(function(resp) {
    expect(resp.status).to.eq(200);
    Cypress.env("token", resp.body.token);
  });
});

Cypress.Commands.add("getBookingIds", (queryParams = {}) => {
  cy.request({
    method: "GET",
    url: "https://restful-booker.herokuapp.com/booking",
    qs: queryParams, // Optional query parameters
  }).then(response => {
    expect(response.status).to.eq(200); // Ensure the request was successful
    return response.body; // Return the booking IDs
  });
});

Cypress.Commands.add("createBooking", (bookingData) => {
  cy.request({
    method: "POST",
    url: "https://restful-booker.herokuapp.com/booking",
    headers: {
      "Content-Type": "application/json",
    },
    body: bookingData,
  }).then(response => {
    expect(response.status).to.eq(200); // Ensure the booking was created successfully
    return response.body; // Return the booking details
  });
});