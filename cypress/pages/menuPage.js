class MenuPage {

    selectorsList() {
        const selectors = {
            adminButton: "[href='/web/index.php/admin/viewAdminModule']",
            pimButton: "[href='/web/index.php/pim/viewPimModule']",
            leaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
            timeButton: "[href='/web/index.php/time/viewTimeModule']",
            recruitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
            dashboardButton: "[href='/web/index.php/dashboard/index']",
            directorydButton: "[href='/web/index.php/directory/viewDirectory']",
            maintenancedButton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            claimdButton: "[href='/web/index.php/claim/viewClaimModule']",
            buzzButton: "[href='/web/index.php/buzz/viewBuzz']",
        }

        return selectors
    }
    
    accessAdmin() {
        cy.get(this.selectorsList().adminButton).click()
    }

    accessPim() {
        cy.get(this.selectorsList().pimButton).click()
    }

    accessLeave() {
        cy.get(this.selectorsList().leaveButton).click()
    }

    accessTime() {
        cy.get(this.selectorsList().timeButton).click()
    }

    accessRecruitment() {
        cy.get(this.selectorsList().recruitmentButton).click()
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

    accessPerformance() {
        cy.get(this.selectorsList().performanceButton).click()
    }

    accessDashboard() {
        cy.get(this.selectorsList().dashboardButton).click()
    }

    accessDirectory() {
        cy.get(this.selectorsList().directorydButton).click()
    }

    accessMaintenance() {
        cy.get(this.selectorsList().maintenancedButton).click()
    }

    accessClaim() {
        cy.get(this.selectorsList().claimdButton).click()
    }

    accessBuzz() {
        cy.get(this.selectorsList().buzzButton).click()
    }
}

export default MenuPage