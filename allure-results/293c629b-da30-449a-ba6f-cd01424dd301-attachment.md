# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Login >> @smoke invalid credentials show an error message
- Location: tests\login.spec.js:18:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('p')
Expected substring: "Invalid"
Error: strict mode violation: locator('p') resolved to 2 elements:
    1) <p hidden="" class="error" id="login-error">Invalid email or password</p> aka getByText('Invalid email or password')
    2) <p>© Demo Dating Co.</p> aka getByText('© Demo Dating Co.')

Call log:
  - Expect "toContainText" locator('p') with timeout 5000ms
  - waiting for locator('p')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - heading "Members Login" [level=1] [ref=e3]
    - text: Email
    - textbox "Email" [ref=e4]: wrong@example.com
    - text: Password
    - textbox "Password" [ref=e5]: badpass
    - button "Log In" [active] [ref=e6]
  - contentinfo [ref=e7]:
    - paragraph [ref=e8]: © Demo Dating Co.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { allure } from 'allure-playwright';
  3  | import { LoginPage } from '../pageObjects/LoginPage.js';
  4  | 
  5  | test.describe('Login', () => {
  6  |   test('@smoke valid credentials log the user in', async ({ page }) => {
  7  |     const loginPage = new LoginPage(page);
  8  | 
  9  |     await allure.step('Open login page', async () => {
  10 |       await loginPage.goTo();
  11 |     });
  12 | 
  13 |     await allure.step('Submit valid credentials and land on home', async () => {
  14 |       await loginPage.loginAndExpectSuccess('demo@example.com', 'Password123');
  15 |     });
  16 |   });
  17 | 
  18 |   test('@smoke invalid credentials show an error message', async ({ page }) => {
  19 |     const loginPage = new LoginPage(page);
  20 | 
  21 |     await allure.step('Open login page', async () => {
  22 |       await loginPage.goTo();
  23 |     });
  24 | 
  25 |     await allure.step('Submit invalid credentials and see an error', async () => {
  26 |       await loginPage.login('wrong@example.com', 'badpass');
> 27 |       await expect(loginPage.errorMessage).toContainText('Invalid');
     |                                            ^ Error: expect(locator).toContainText(expected) failed
  28 |     });
  29 |   });
  30 | 
  31 |   test('invalid credentials keep the user on the login flow', async ({ page }) => {
  32 |     const loginPage = new LoginPage(page);
  33 | 
  34 |     await allure.step('Open login page', async () => {
  35 |       await loginPage.goTo();
  36 |     });
  37 | 
  38 |     await allure.step('Submit invalid credentials', async () => {
  39 |       await loginPage.loginAndExpectFailure('wrong@example.com', 'badpass');
  40 |     });
  41 |   });
  42 | });
  43 | 
```