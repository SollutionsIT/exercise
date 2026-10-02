import { test as base } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage.js';

export const test = base.extend({
  authorizedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.emailInput.fill('demo@example.com');
    await loginPage.passwordInput.fill('Password123');
    await loginPage.submitButton.click();
    await page.waitForURL(/\/home/);
    await use(page);
  },
});
