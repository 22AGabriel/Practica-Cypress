/// <reference types="cypress" />
/* Estructura básica de pruebas 

describe("conjunto de pruebas", () => {
    it("Validación 1", () => {

    })
    it("Validación 2", () => {

    })
})
*/

//* Primer prueba

describe("Test suite - conjunto de pruebas", () => {
    beforeEach(() => {
        cy.visit("http://zero.webappsecurity.com/")
        cy.get('#signin_button').click()
        cy.get('#user_login').type("username") //Para escribir dentro de un input
        cy.get('#user_password').type("password")
        cy.get('.btn').click()
    })

    it("Validar página de inicio", () => {
        // prefijo "cy." + método
        // cy.visit("http://zero.webappsecurity.com/")

        //Ubico el elemento y luego valido que esté visible y contenga cierto texto
        /*
            cy.get("h1").should("be.visible")
            cy.get("h1").contains("It works!")
        */
        // cy.get('.brand').should("be.visible").contains("Zero Bank")
    })

    it("Prueba E2E - Transferencia de fondos", () => {
        //Paso a paso de la prueba E2E
        cy.get('#transfer_funds_tab > a').click()
        cy.get('#tf_fromAccountId').select("1") //Seleccionar desde un select mediante su posición - Empieza en 1    
        cy.get('#tf_toAccountId').select("5")
        cy.get('#tf_amount').type("300")
        cy.get('#tf_description').type("Transferencia de prueba de 300")
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()

        //Validación final
        cy.get('.alert').contains("You successfully submitted your transaction.")
    })

    it.only("Actualización de gráfico", () => {
        // .only para correr solo esta prueba
        cy.get('#money_map_tab > a').click()
        cy.get('#ext-sprite-1259').should("be.visible")
        cy.get('#ext-sprite-1167 > tspan').click()
        cy.get('#ext-sprite-1259').should("not.be.visible")
    })
})