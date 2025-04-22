describe("getBooks", () => {
  it("should fetch all booking IDs", () => {
    cy.getBookingIds().then(bookingIds => {
      cy.log("Booking IDs:", bookingIds);
      expect(bookingIds).to.be.an("array");
    });
  });

  it("should fetch booking IDs with query parameters", () => {
    cy.fixture("queryParams").then(queryParams => {
      cy.getBookingIds(queryParams).then(bookingIds => {
        cy.log("Filtered Booking IDs:", bookingIds);
        expect(bookingIds).to.be.an("array");
      });
    });
  });
});

describe("createBooking", () => {
  it("should create a new booking", () => {
    cy.fixture("bookingData").then(bookingData => {
      cy.createBooking(bookingData).then(booking => {
        cy.log("Booking Response:", booking);
        expect(booking).to.have.property("bookingid"); // Validate booking ID exists
        expect(booking.booking).to.deep.include(bookingData); // Validate booking details
      });
    });
  });
});