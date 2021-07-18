import { expect } from 'chai'
import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import GETUsers from '../../services/regres/regres.service'



When("I send a valid request", () => {
    GETUsers.getUsers().then(res => {
        cy.log('RESPONSE: ', (res.body))
        cy.wrap({ res }).as('response')

    })
})


Then("I receive a {string} and status code {int}", (schema, status) => {
    cy.get('@response').then(when => {
        cy.ValidarSchema(when.res.body, `${schema}/${status}`)
        expect(when.res.status).to.eq(status)
    })
})



