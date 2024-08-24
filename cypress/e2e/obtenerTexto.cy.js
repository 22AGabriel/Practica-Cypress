/// <reference types="cypress" />

describe('obtener texto', () => {  
    it("ejemplo_obtener_texto", () => {
        cy.visit("https://www.amazon.com")
        // cy.get('[for="twotabsearchtextbox"]').should("contain", "Search Amazon")

        cy.get('[for="twotabsearchtextbox"]').then(value => {
            const textValue = value.text() //Guardo el texto en una variable
            expect(textValue).to.equal("Search Amazon") //Verifica que el texto sea igual
            cy.wrap(textValue).should('contain', 'Search A') //Verifica que contenga cierto texto
        })
    })
 })