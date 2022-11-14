// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('ConfigSex', (idSex) =>{
  cy.fixture('form').then((json)=>{
    switch (json.sex) {
      case 'Male':
        idSex = "1"
        break;
        case 'Female':
        idSex = "2"
      default: idSex = "3"
        break;
    }
    return idSex;
  })
})
Cypress.Commands.add('ConfigEducation', (education) =>{
  cy.log("educacion: " + education)
  switch (education) {
    case 'High School':
      education = "1"
      break;
    case 'College':
      education = "2"
      break;
    default: education = "3"
      break;
  }
  cy.log("educacion transformada: " + education)
  return cy.wrap(education);
})