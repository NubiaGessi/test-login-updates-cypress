import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: ".oxd-alert",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-mm-dd']",
    genericCombobox: ".oxd-select-text--arrow",
    fifthNationalityCombobox: ".oxd-select-dropdown > :nth-child(5)",
    secondMaritalCombobox: ".oxd-select-dropdown > :nth-child(2)",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
  }

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
  
  it('User Info Update - Sucess', () => {
      cy.visit('/auth/login')
      cy.get(selectorsList.usernameField).type(userData.userSucess.username)
      cy.get(selectorsList.passwordField).type(userData.userSucess.password)
      cy.get(selectorsList.loginButton).click()
      cy.location('pathname').should('equal','/web/index.php/dashboard/index')
      cy.get(selectorsList.dashboardGrid)
      cy.get(selectorsList.myInfoButton).click()
      cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
      cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
      cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeId')
      cy.get(selectorsList.genericField).eq(4).clear().type('OtherId')
      cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseTest')
      cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
      cy.get(selectorsList.dateCloseButton).click()
      cy.get(selectorsList.genericCombobox).eq(0).click()
      cy.get(selectorsList.fifthNationalityCombobox).click()
      cy.get(selectorsList.genericCombobox).eq(1).click()
      cy.get(selectorsList.secondMaritalCombobox).click()
      cy.get(selectorsList.submitButton).eq(0).click()
      cy.get('.oxd-toast-close')
    })
})