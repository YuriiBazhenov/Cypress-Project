

class Bookyourtrip {

    oneWayButton(){
        return cy.get('.radio > input').eq(0)
    }

    RoundTripButton(){
        return cy.get('.radio > input').eq(1)
    }

    bookButton(){
        return cy.get('.Button_c_button__TmkRS')
    }
}


export default Bookyourtrip