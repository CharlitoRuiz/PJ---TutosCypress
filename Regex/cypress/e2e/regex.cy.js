///<reference types="Cypress" />

beforeEach('enter the URL', ()=>{
  cy.visit('https://bncr.bnonline.fi.cr/Login/RegistroLineaTarjeta.aspx')
})

describe('Test', () => {
  it('Regex test: cedula identidad', () => {
    cy.get('#cphEncabezado_ddlbTipoCedula').select(0)
    cy.get('#cphEncabezado_txtIdentificacion').type("113720104")
    cy.get('#cphEncabezado_ddlbTipoTarjeta').select(0)
    cy.get('#cphEncabezado_txtIdentificacion').invoke("val").should('match', /[1-8]{1}-[0-9]{4}-[0-9]{4}$/)
  })
  it('Regex test: cedula juridica', () => {
    cy.get('#cphEncabezado_ddlbTipoCedula').select(1)
    cy.get('#cphEncabezado_txtIdentificacion').type("310122889900")
    cy.get('#cphEncabezado_ddlbTipoTarjeta').select(0)
    cy.get('#cphEncabezado_txtIdentificacion').invoke("val").should('match', /(3){1}-[0-9]{3}-[0-9]{6}-(0){2}$/)
  })
  it('Regex test: cedula extranjera', () => {
    cy.get('#cphEncabezado_ddlbTipoCedula').select(2)
    cy.get('#cphEncabezado_txtIdentificacion').type("155810406828")
    cy.get('#cphEncabezado_ddlbTipoTarjeta').select(0)
    cy.get('#cphEncabezado_txtIdentificacion').invoke("val").should('match', /[a-zA-Z0-9]{1,16}$/)
  })
})