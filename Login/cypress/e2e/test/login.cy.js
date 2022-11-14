///<reference types="Cypress" />
import loginPage from '../pages/login.pages'
describe('Test suite', () => {
  const login = new loginPage();

  beforeEach('Enter site', ()=>{
    cy.visit('/login')
  })
  it('Enter to login page', () => {
    cy.fixture('login').then((json) =>{
      cy.Login(json.username, json.pass)
    })
  })

  afterEach('validate the message', ()=>{
    login.getAlert().should('exist')
    cy.screenshot('enterPage')
    login.clickLogoutButton()
  })
})