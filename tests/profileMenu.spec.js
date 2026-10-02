import { expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import { test } from '../fixtures/authFixture.js';
import { ProfileMenu } from '../pageObjects/ProfileMenu.js';

test.describe('Profile menu', () => {
  test('@smoke menu opens and closes', async ({ authorizedPage }) => {
    const menu = new ProfileMenu(authorizedPage);

    await allure.step('Menu button is visible', async () => {
      await expect(menu.menuButton).toBeVisible();
    });

    await allure.step('Opening the menu shows the dropdown', async () => {
      await menu.open();
      await expect(menu.dropdown).toBeVisible();
    });

    await allure.step('Clicking outside closes the dropdown', async () => {
      await menu.close();
      await expect(menu.dropdown).toBeHidden();
    });
  });
});
