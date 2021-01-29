describe('Login', () => {
    it('Checks for login input', () => {
        cy.visit('http://www.localhost:3000/')
        cy.contains('.form-control form-control-user')
    })
})