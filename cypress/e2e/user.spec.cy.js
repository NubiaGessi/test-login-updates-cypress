import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MyInfoPage from '../pages/myInfoPage'
import MenuPage from '../pages/menuPage'

const Chance = require('chance');

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myInfoPage = new MyInfoPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(),chance.last())
    myInfoPage.fillEmployeeDetails(chance.natural({min: 1, max: 9999999999}),chance.natural(), chance.natural(), '2025-09-26')
    myInfoPage.fillStatusDetails()
    myInfoPage.saveForm()
            
    })
})