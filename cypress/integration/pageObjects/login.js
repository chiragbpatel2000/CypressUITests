
class login{

    enterUsername(){

        return cy.get('#username')

   }

    enterPassword(){
       return cy.get('#password')
    }

    clickOnSignIn(){

        return  cy.get('.MuiButton-label')

    }

}

export default login