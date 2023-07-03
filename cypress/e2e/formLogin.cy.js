describe('Formulario de Login', ()=>{
    beforeEach(()=>{
      cy.visit('http://localhost:3001')
    })
  
    it('Não deve permitir um email inválido', ()=>{
      cy.getByData('botao-login').click()
      cy.getByData('email-input').type('neilton@alura')
      cy.getByData('senha-input').type('123456')
      cy.getByData('botao-enviar').click()
      cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido')
    })
  })