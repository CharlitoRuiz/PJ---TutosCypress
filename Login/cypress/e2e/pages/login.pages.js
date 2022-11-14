/// <reference types="cypress" />

class LoginPage {
  // Locators
  getUserName() {
    return cy.get('#username')
  }
  getPassword() {
    return cy.get('#password')
  }
  getBtnLogin() {
    return cy.get('.fa')
  }
  getAlert(){
    return cy.get('#flash')
  }
  getBtnLogout(){
    return cy.get('.button')
  }


  // Methods  
  enterUserAndPassword(user, pass) {
    this.getUserName().type(user);
    this.getPassword().type(pass);
    return this;
  }

  clickLogInButton(){
    this.getBtnLogin().click();
  }
  clickLogoutButton(){
    this.getBtnLogout().click();
  }

}
export default LoginPage;