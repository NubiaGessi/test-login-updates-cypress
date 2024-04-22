class MyInfoPage {

    selectorsList() {
        const selectors = {
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

        return selectors
    }
    
    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

    updateMyInfo() {
        cy.get(this.selectorsList().firstNameField).clear().type('FirstNameTest')
        cy.get(this.selectorsList().lastNameField).clear().type('LastNameTest')
        cy.get(this.selectorsList().genericField).eq(3).clear().type('EmployeeId')
        cy.get(this.selectorsList().genericField).eq(4).clear().type('OtherId')
        cy.get(this.selectorsList().genericField).eq(5).clear().type('DriversLicenseTest')
        cy.get(this.selectorsList().genericField).eq(6).clear().type('2025-03-10')
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericCombobox).eq(0).click()
        cy.get(this.selectorsList().fifthNationalityCombobox).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click()
        cy.get(this.selectorsList().secondMaritalCombobox).click()
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('.oxd-toast-close')
    }
}

export default MyInfoPage