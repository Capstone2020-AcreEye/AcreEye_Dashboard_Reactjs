describe('Login', () => {
    it('Checks for login input', () => {
        console.log()
        cy.visit('http://127.0.0.1:3000')
        cy.get('#exampleInputEmail')
    })
})