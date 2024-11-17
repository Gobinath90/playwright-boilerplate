import test from '../testFixtures/fixture'
import { expect } from '@playwright/test';
import fs from 'fs'
const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))
import { baseUrl, title } from '../config'
import { LoginPage, LogoutPage } from '../pages';
import * as allure from "allure-js-commons";



test.describe('Admin user login and logout flow verification', () => {
  let loginPage, logoutPage;
  
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    logoutPage = new LogoutPage(page);
    await loginPage.openApp();
  });

  test('@regression: Verify successful login and logout as an admin user', async () => {
    await test.step('Login as an admin user', async () => {
      await loginPage.loginCredentials(testData.admin.email,  testData.admin.password);
    });

    await test.step('Logout from the application', async () => {
      await logoutPage.logout();
    });
  });

  test('@regression: Verify successful login and logout as an investor user', async () => {
    await allure.owner("John Doe");
    await allure.tags("Web interface", "Authentication");
    await allure.severity("critical");

    await test.step('Login as an admin user', async () => {
      await loginPage.loginCredentials(testData.investor.email,  testData.investor.password);
    });

    await test.step('Logout from the application', async () => {
      await logoutPage.logout();
    });
  });
});