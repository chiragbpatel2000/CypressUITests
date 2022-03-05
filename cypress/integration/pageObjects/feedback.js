class feedback{

    enterFirstname(){
        return cy.get('#firstname')

    }
    enterLastname(){
        return cy.get('#lastname')
    }
    enterEmail(){
        return  cy.get('#email')
    }
    enterPhonenumber(){
        return cy.get('#phone')
    }
    enterCompanyname(){
        return cy.get('#company')
    }
    enterpostcode(){
        return cy.get('.MuiInputBase-root > #postcode')
    }
    selectPriority(){
        return cy.get('select').select('High').should('have.value', '2')
    }
    enterYourFeedback(){
        return cy.get('#feedback')
    }
    clickOnSendFeedback(){
        return cy.get('.MuiButton-label')
    }
}

export default feedback