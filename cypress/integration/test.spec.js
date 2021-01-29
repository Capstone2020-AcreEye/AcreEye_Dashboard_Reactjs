describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('http://www.localhost:3000/')
        cy.contains('form-control form-control-user')
    })
})