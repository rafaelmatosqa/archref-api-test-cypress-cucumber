import { expect } from 'chai'
import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import PostPet from '../../services/petStore/petStore.service'
import dataPetStore from '../../fixtures/dataFactory/dataPetStore.json'




When("I send a POST request with valid body", () => {
    PostPet.createPetStore(dataPetStore).then(res => {
        cy.log('RESPONSE: ', (res.body))
        cy.wrap({ res }).as('response')

    })
})


Then("I receive a valid response data {string} and status code {int}", (schema, status) => {
    cy.get('@response').then(when => {
        cy.ValidarSchema(when.res.body, `${schema}/${status}`)
        expect(when.res.status).to.eq(status)
    })
})


Then("The name must be equal {string}", (name) => {
    cy.get('@response').then(when => {
        expect(when.res.body.name).to.eq(name)
    })
})




