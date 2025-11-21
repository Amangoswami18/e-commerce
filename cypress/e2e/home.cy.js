describe("Home Page Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Loads the homepage", () => {
    cy.contains("All"); 
  });

  it("Filters products", () => {
    cy.get("select", { timeout: 10000 }).should("be.visible");

    // Select men's clothing
    cy.get("select").select("men's clothing");

    // Check if product cards filtered properly
    cy.contains("MEN");
  });
});
