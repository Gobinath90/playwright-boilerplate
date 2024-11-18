import BasePage from './basePage'
import { baseUrl } from '../config'
import fs from 'fs'


class sideMenuPage extends BasePage {

	constructor(page) {
		super(page);
	}

    async sideMenu(menuItemName) {
		const menuItems = {
            Home: "//button[contains(.,'Home')]",
            Withdrawals: "//button[contains(.,'Withdrawals')]",
            Deposits: "//button[contains(.,'Deposits')]",
            Wallets: "//button[contains(.,'Wallets')]",
            Organization: "//button[contains(.,'Organization')]",
            Account: "//button[contains(.,'Account')]",
            Logout: "//button[contains(.,'Logout')]",
        };
        const menuItem = menuItems[menuItemName];
        if (!menuItem) {
            throw new Error(`Menu item "${menuItemName}" does not exist.`);
        }
        await this.waitAndClick(menuItem, `${menuItemName} Menu Item`);
	}
}

export default sideMenuPage;