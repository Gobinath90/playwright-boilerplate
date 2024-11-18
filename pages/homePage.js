import BasePage from './basePage'
import { baseUrl } from '../config'
import fs from 'fs'

export const headerText = "//h1[text()='ETANATRUST']";
export const dashboardText = "//span[text()='DASHBOARD']";
export const investorLocator = "//div[text()='INVESTOR']";
export const adminLocator = "//div[text()='ADMIN']";



class HomePage extends BasePage {

	constructor(page) {
		super(page);
	}


	async isEtanaTrustVisible() {
		await this.page.waitForSelector(headerText, { state: 'visible' });
		return await this.page.isVisible(headerText);
	}

	async isDashboardVisible() {
		await this.page.waitForSelector(dashboardText, { state: 'visible' });
		return await this.page.isVisible(dashboardText);
	}

	async isInvestorVisible() {
		await this.page.waitForSelector(investorLocator, { state: 'visible' });
		return await this.page.isVisible(investorLocator);
	}
	async isAdminVisible() {
		await this.page.waitForSelector(adminLocator, { state: 'visible' });
		return await this.page.isVisible(adminLocator);
	}

}

export default HomePage;