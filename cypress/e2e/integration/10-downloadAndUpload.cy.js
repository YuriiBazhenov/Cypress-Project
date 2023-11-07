/// <reference types="cypress" />

describe("File Download & File Upload", () => {
    /**
     * Go to https://techglobal-training.com/frontend/
     * Click on the "File Download" card
     * Click on the "TechGlobal School.pptx" file
     * Validate the file is downloaded in your Downloads file
     */
    let fileName;
  
    it("File Download", () => {
      cy.visit("https://techglobal-training.com/frontend");
      cy.clickCard("File Download & Upload");
  
      cy.get("#file_download").click();
  
      fileName = "SampleText.txt";
  
      cy.readFile(`cypress/downloads/${fileName}`);
    });
  
    /**
     * Go to https://techglobal-training.com/frontend/
     * Click on the "File Upload" card
     * Send the path of the file as keys to the "Choose File" input box
     * Click on the "UPLOAD" button
     * Validate the result message equals "You Uploaded 'SampleText.txt'"
     */
  
    it("File Upload", () => {
      cy.visit("https://techglobal-training.com/frontend");
      cy.clickCard("File Download & Upload");
  
      cy.get('#file_upload').selectFile(`cypress/downloads/${fileName}`)
  
      // Way to upload more than 1 file for the websites allowing you to upload multiple files at a time.
      // cy.get('#file_upload').selectFile([`cypress/downloads/${fileName}`, `cypress/downloads/${fileName}2`])
  
      // {action: 'drag-drop'} will give you option to drag the file into upload area
      // cy.get('#file_upload').selectFile(`cypress/downloads/${fileName}`, {action: 'drag-drop'})
  
  
      cy.get('#file_submit').realClick()
  
      cy.get('#result').should('have.text', `You uploaded ${fileName}`)
    });
  });