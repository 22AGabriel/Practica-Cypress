/// <reference types="cypress" />

describe('checkbox_radioButtons', () => { 
    
    beforeEach(() => {
        cy.visit('https://getbootstrap.com/docs/5.3/forms/checks-radios')
    })
    it('Ejemplo de checkbox', () => {
        cy.get('#flexCheckDefault').click().should('be.checked') // .click({force:true} no es recomendable salvo que se quiera forzar una acción sin que Cypress bloquee el clic por problemas de visibilidad o interacción)
        cy.get('#flexCheckChecked').click().should('not.be.checked')

        cy.get('#flexCheckDisabled').should('be.disabled')
    })

    it.only('Ejemplo de radioButtons', () => {
        cy.get('#flexRadioDefault1').check()
        cy.get('#flexRadioDefault2').should('not.be.checked')
        cy.get('#flexRadioDisabled').should('be.disabled')
    })
 })
