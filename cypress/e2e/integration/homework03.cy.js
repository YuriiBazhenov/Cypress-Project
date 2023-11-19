

import Bookyourtrip from '../../pages/Bookyourtrip'


const bookyourtrip = new Bookyourtrip()

describe('Homework', () => {


  /*
Navigate to https://techglobal-training.com/frontend/project-3
Validate that the “One way” radio button is displayed enabled and selected by default
Validate that the “Round trip” radio button is displayed enabled and not selected by default
Validate that the “Cabin Class” label and dropdown are displayed
Validate that the “From” label and dropdown are displayed
Validate that the “To” label and dropdown are displayed
Validate that the “Depart” label and date picker is displayed
Validate that the “Return” label and date picker is displayed and disabled
Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
Validate that the “Passenger 1” category label and dropdown are displayed and “Adult (16-64)” is the default
Validate that the “BOOK” button is displayed and enabled
  */



  it('Test Case 01 - Validate the Contact Us information', () => {
    cy.visit('https://techglobal-training.com/frontend/project-3')

    const labels = ['Cabin Class', 'From', 'To', 'Number of passengers', 'Passenger 1']

    cy.get('.radio > input').each((el) => {
      cy.wrap(el).should('be.enabled').and('be.visible')
    })

    cy.get('.select').prev().each((el, index) => {
      cy.wrap(el).should('have.text', labels[index]).next().realClick()
    })

    /*
    cy.get(':nth-child(5) > .control > .react-datepicker-wrapper > .react-datepicker__input-container > input , :nth-child(6) > .control > .react-datepicker-wrapper > .react-datepicker__input-container > input')
*/

    bookyourtrip.bookButton().should('be.visible').and('be.enabled')

    //     cy.get('.radio > input').each((el) => {
    //         cy.wrap(el).should('be.enabled').and('be.visible')
    //     })
    //     cy.get('.radio > input').eq(0).should('be.checked')
    //     cy.get('.radio > input').eq(1).should('not.be.checked')


    //     cy.get('.field > label').next().each((el) => {
    //         cy.wrap(el).should('be.visible')      
    // })


  })

  it.only('Test Case 01 - Validate the Contact Us information', () => {
    cy.visit('https://techglobal-training.com/frontend/project-3')

    const labels = ['Cabin Class', 'From', 'To','Depart', 'Return', 'Number of passengers', 'Passenger 1']

    const validation = [':nth-child(2) > .mr-1', '.ml-0 > .mr-1']
    cy.get('.radio > input').should('be.visible')
    cy.checkOptionAndValidateOthers('.ml-0 > .mr-1', validation)
    cy.checkOptionAndValidateOthers(':nth-child(2) > .mr-1', validation)

    cy.get('.field > label').each((el, index) => {
      cy.wrap(el).should('have.text', labels[index]).next().realClick()
    })

   

  })

})