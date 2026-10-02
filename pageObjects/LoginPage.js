import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('h1');
    this.emailInput = page.locator('#form-login-email');
    this.passwordInput = page.locator('#form-login-password');
    this.submitButton = page.locator('#login-submit');
    this.errorMessage = page.locator('#login-error');
  }

  async goTo() {
    await this.page.goto('/#/auth/login');
    await expect(this.title).toBeVisible();
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async loginAndExpectSuccess(email, password) {
    await this.login(email, password);
    await expect(this.page).toHaveURL(/#\/home$/);
  }

  async loginAndExpectFailure(email, password) {
    await this.login(email, password);
    await expect(this.page).toHaveURL(/#\/auth\/login\?error=401$/);
  }
}
