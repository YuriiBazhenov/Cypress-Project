import TablesPage from "../../pages/TablesPage";

describe("Static Tables", () => {

    beforeEach(() => {
        cy.fixture('example').then(function(data) {
            this.headers = data.headers
        })
    })
  /**
   * TEST CASE 1
   * Verify the headers of the table
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Tables" card
   * Validate the headers of the table are "Rank", "Company", "Employees", and "Country"
   */

  const tablesPage = new TablesPage()

  it("Verify the headers of the table", {tags: ['@smoke', '@regression']}, function() {
    cy.visit('https://techglobal-training.com/frontend/tables')

    tablesPage.getCompanyTableHeaders().find('th').each(($txt, index) => {
        cy.wrap($txt).should('have.text', this.headers[index])
    })
  });
});