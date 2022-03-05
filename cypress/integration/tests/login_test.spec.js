/// <reference types="cypress" />
import login from "../pageObjects/login";

describe('login tests with credentials ', () => {

    const loginObj = new login()

    let loginDetails;
    beforeEach(() => {
        cy.visit('https://www.matillion-automation-test.com/')
        cy.fixture('logintestdata.json').then(function (loginData) {
            loginDetails = loginData
        })

    })
    it('TC 01 - login tests with valid credentials', () => {


        cy.contains('Sign in').should('exist')
        cy.contains('Username').should('exist')
        cy.contains('Password').should('exist')
        loginObj.enterUsername().type(loginDetails.username)
        loginObj.enterPassword().type(loginDetails.password)
        loginObj.clickOnSignIn().should('be.visible').click()
        cy.contains('Feedback Form').should('exist')
    })


})