//Se agrega la linea inferior para el autocompletado de cypress
/// <reference types="cypress" />

describe('Localizadores', () => {

    it.only("tipo_localizadores", () => {
        cy.visit("https://www.google.com")

        //Localizador por etiqueta
        cy.get("textarea")
        
        //Localizador por id
        cy.get("#APjFqb")

        //Localizador por clase
        cy.get(".gLFyf")
        
        //Localizador por atributo
        cy.get("[maxLength]")

        //Localizador por atributo y su valor
        cy.get('[maxLength="2048"]')

        //Localizador multiple (Ej: etiqueta + atributo y su valor + clase)
        cy.get('textarea[maxLength="2048"].gLFyf')
    })
    
 })