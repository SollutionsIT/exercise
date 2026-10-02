import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import { LoginPage } from '../pageObjects/LoginPage.js';

test.describe('Login', () => {
  test('@smoke valid credentials log the user in', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await allure.step('Open login page', async () => {
      await loginPage.goTo();
    });

    await allure.step('Submit valid credentials and land on home', async () => {
      await loginPage.loginAndExpectSuccess('demo@example.com', 'Password123');
    });
  });

  test('@smoke invalid credentials show an error message', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await allure.step('Open login page', async () => {
      await loginPage.goTo();
    });

    await allure.step('Submit invalid credentials and see an error', async () => {
      await loginPage.login('wrong@example.com', 'badpass');
      await expect(loginPage.errorMessage).toBeVisible();
      await expect(loginPage.errorMessage).toHaveText('Invalid email or password');
    });
  });

  test('invalid credentials keep the user on the login flow', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await allure.step('Open login page', async () => {
      await loginPage.goTo();
    });

    await allure.step('Submit invalid credentials', async () => {
      await loginPage.loginAndExpectFailure('wrong@example.com', 'badpass');
    });
  });
});
