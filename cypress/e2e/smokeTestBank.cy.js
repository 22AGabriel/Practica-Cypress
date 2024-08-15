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
    it("Validar página de inicio", () => {
        // prefijo "cy." + método
        cy.visit("https://zero.webappsecurity.com/")

        //Ubico el elemento y luego valido que esté visible y contenga cierto texto
        /*
            cy.get("h1").should("be.visible")
            cy.get("h1").contains("It works!")
        */
        cy.get("h1").should("be.visible").contains("It works!")
    })
})