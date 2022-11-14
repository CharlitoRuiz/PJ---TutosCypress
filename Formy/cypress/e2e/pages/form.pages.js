/// <reference types="cypress" />

class FormPage {
  // Locators
  getFirstName() {
    return cy.get('#first-name')
  }
  getLastName() {
    return cy.get('#last-name')
  }
  getJob() {
    return cy.get('#job-title')
  }
  getEducation(id){
    return cy.get('#radio-button-' + id)
  }
  getSex(id){
    return cy.get('#checkbox-' + id)
  }

  getExperience(){
    return cy.get('#select-menu')
  }

  getDate(){
    return cy.get('#datepicker')
  }

  getBtnSubmit(){
    return cy.get('.btn')
  }
  getAlert(){
    return cy.get('.alert')
  }


  // Methods  
  enterFirstAndLastName(firstName, lastName, job) {
    this.getFirstName().type(firstName);
    this.getLastName().type(lastName);
    this.getJob().type(job)
    return this;
  }
  chooseEducation(idEducation){
    this.getEducation(idEducation).click()
  }
  chooseSex(idSex){
    this.getSex(idSex).click()
  }
  selectExperience(option){
    this.getExperience().select(option)
  }
  enterDate(date){
    this.getDate().type(date)
  }
  clickSubmitButton(){
    this.getBtnSubmit().click()
  }

}
export default FormPage;