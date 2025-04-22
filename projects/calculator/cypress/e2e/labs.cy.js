describe("Speed Game", () => {
  it("passes", () => {
    cy.visit("https://thelab.boozang.com/speedGame");
    cy.get('[data-testid="startBtn"]').click();
    cy.get(".delete", { timeout: 30000 }).click(); // Limite 30 segundos
    cy.wait(3000);
  });
});

describe("Wait Game", () => {
  it("passes", () => {
    cy.visit("https://thelab.boozang.com/waitGame");
    cy.get('[data-testid="startBtn"]').click();
    cy.wait(5000);
    cy.get(".delete").click();
    cy.wait(3000);
  });
});

describe("Yellow or Blue", () => {
  it("passes", () => {
    cy.visit("https://thelab.boozang.com/yellowOrBlue");
    cy.get(".form_btn").click();
    cy.get(".color").then($color => {
      $color == "Yellow" ? cy.get(".yellow").click() : cy.get(".blue").click();
    });
    cy.wait(3000);
  });
});

describe("Sorted List", () => {
  it("passes", () => {
    cy.visit("https://thelab.boozang.com/sortedList");
    cy.get("input").type("Maizena");
    cy.get(".form_btn").click();
    cy.get("input").clear();
    cy.get("input").type("Potasio");
    cy.get(".form_btn").click();
    cy.wait(3000);
  })
})

describe("Form Fill", () => {
  it("passes", () => {
    cy.visit("https://thelab.boozang.com/formFill");
    cy.fixture("usuario1").then(usuario1 => {
      cy.get(":nth-child(1) > input").type(usuario1.name);
      cy.get(":nth-child(2) > input").type(usuario1.lastname);
      cy.get(":nth-child(3) > input").type(usuario1.email);
      cy.get(":nth-child(4) > input").type(usuario1.password);
      cy.get(".btn_section > .form_btn").click();
    })
    cy.fixture("usuario2").then(usuario2 => {
      cy.get(":nth-child(1) > input").type(usuario2.name);
      cy.get(":nth-child(2) > input").type(usuario2.lastname);
      cy.get(":nth-child(3) > input").type(usuario2.email);
      cy.get(":nth-child(4) > input").type(usuario2.password);
      cy.get(".btn_section > .form_btn").click();
    })
    cy.get(".orange").click();
    cy.wait(3000);
  })
})

describe("Cat Shelter", () => {
  it("passes", () => {
    cy.visit("https://thelab.boozang.com/catshelter");

    cy.get(".cat_shelter_header > .link_btn").click();
    cy.fixture("gatos").then(gatos => {
      cy.get(".list_form > :nth-child(1) > input").type(gatos.gato1.name);
      cy.get("textarea").type(gatos.gato1.description);
      cy.get(":nth-child(1) > label > input").check();
      cy.get(".text-center > .form_btn").click();
    });
    cy.get(".cat_shelter_header > .link_btn").click();
    cy.fixture("gatos").then(gatos => {
      cy.get(".list_form > :nth-child(1) > input").type(gatos.gato2.name);
      cy.get("textarea").type(gatos.gato2.description);
      cy.get(".go_out_or_not > :nth-child(2) > label > input").check();
      cy.get(".text-center > .form_btn").click();
    });
    cy.wait(3000);
  });
});

describe("Concatenate Strings", () => {
  it("passes", () => {
    cy.visit("https://thelab.boozang.com/concatStrings");
    cy.get(".strings_section > :nth-child(2)").click();

    let string1 = "";
    let string2 = "";

    cy.get(".string1").then($string1 => {
      string1 = $string1.text();
    });

    cy.get(".string2").then($string2 => {
      string2 = $string2.text();
    });

    cy.then(() => {
      const finalString = string1 + string2;
      cy.get("input").type(finalString);
      cy.get(".text-center > .form_btn").click();
    });

    cy.wait(3000);
  });
});
