///<reference types="Cypress" />
import formPage from '../pages/form.pages'
describe('Test suite', () => {
  const form = new formPage();
  let idSex, idEducation;

  beforeEach('Enter site', ()=>{
    cy.visit('/form')
  })
  before('Config the ids', ()=>{
    cy.fixture('form').then((json) =>{
      cy.ConfigEducation(json.education).then((value) =>{
        idEducation = value
      })
      cy.ConfigSex(json.sex).then((value) =>{
        idSex = value
      })
    })
  })
  it('Enter user information to the form', () => {
    cy.fixture('form').then((json) =>{
      form.enterFirstAndLastName(json.firstName, json.lastName, json.job)
      form.chooseEducation(idEducation)
      form.chooseSex(idSex)
      form.selectExperience(json.experience)
      form.enterDate(json.date)
      form.clickSubmitButton()
    })
  })

  afterEach('validate the message', ()=>{
    form.getAlert().should("include.text", "The form was successfully submitted!")
  })
})