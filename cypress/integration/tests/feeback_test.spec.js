/// <reference types="cypress" />
import login from "../pageObjects/login";
import feedback from "../pageObjects/feedback";



describe('customer feedback form test ', () => {
    const loginObj = new login()
    const feedbackObj = new feedback()

    let loginDetails;
    let feedbackDetails;
    beforeEach(() => {
        
        cy.visit('https://www.matillion-automation-test.com/')
        cy.fixture('logintestdata.json').then(function (loginData) {
            loginDetails = loginData
        })
        cy.fixture('feedbacktestdata').then(function (feedbackData) {
            feedbackDetails = feedbackData
        })
    });


    it('TC 02 - Feedback form tests', () => {


        loginObj.enterUsername().type(loginDetails.username)
        loginObj.enterPassword().type(loginDetails.password)
        loginObj.clickOnSignIn().should('be.visible').click()

        //assert
        cy.contains('Feedback Form').should('exist')
        feedbackObj.enterFirstname().type(feedbackDetails.firstName)
        feedbackObj.enterLastname().type(feedbackDetails.lastName)
        feedbackObj.enterEmail().type(feedbackDetails.email)
        feedbackObj.enterPhonenumber().type(feedbackDetails.phone)
        feedbackObj.enterCompanyname().type(feedbackDetails.company)
        feedbackObj.enterpostcode().type(feedbackDetails.postcode)
        feedbackObj.selectPriority()
        feedbackObj.enterYourFeedback().type(feedbackDetails.yourFeedback)

        //assert
        cy.contains('Send Feedback').should('exist')
        feedbackObj.clickOnSendFeedback().click()

        //assert
        cy.contains('Thank you for your feedback').should('exist')
        cy.get('.feedback__sent').click()
    })
})