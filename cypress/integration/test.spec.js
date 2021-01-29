describe('Login', () => {
    it('Checks for login input', () => {
        console.log()
        cy.visit('http://localhost:3000')
        cy.get('#exampleInputEmail')
    })
})