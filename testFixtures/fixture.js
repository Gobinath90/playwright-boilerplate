import { test as fixture } from '@playwright/test'
import LoginPage from '../pages/loginPage'
import LogoutPage from '../pages/logoutPage'

const test = fixture.extend({
	loginPage: async ({ page }, use) => {
		await use(new LoginPage(page))
	},
	logoutPage: async ({ page }, use) => {
		await use(new LogoutPage(page))
	}
})
export default test
