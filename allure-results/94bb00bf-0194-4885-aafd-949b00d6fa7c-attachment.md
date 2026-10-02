# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Login >> @smoke valid credentials log the user in
- Location: tests\login.spec.js:6:3

# Error details

```
Error: expect(received).toMatch(expected)

Expected pattern: /\/home/
Received string:  "http://localhost:4321/#/auth/login"
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - heading "Members Login" [level=1] [ref=e3]
    - text: Email
    - textbox "Email" [ref=e4]: demo@example.com
    - text: Password
    - textbox "Password" [ref=e5]: Password123
    - button "Log In" [active] [ref=e6]
  - contentinfo [ref=e7]:
    - paragraph [ref=e8]: © Demo Dating Co.
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  |     this.title = page.locator('h1');
  7  |     this.emailInput = page.locator('#form-login-email');
  8  |     this.passwordInput = page.locator('#form-login-password');
  9  |     this.submitButton = page.locator('#login-submit');
  10 |     this.errorMessage = page.locator('p');
  11 |   }
  12 | 
  13 |   async goTo() {
  14 |     await this.page.goto('/#/auth/login');
  15 |     await expect(this.title).toBeVisible();
  16 |   }
  17 | 
  18 |   async login(email, password) {
  19 |     await this.emailInput.fill(email);
  20 |     await this.passwordInput.fill(password);
  21 |     await this.submitButton.click();
  22 |     await this.page.waitForTimeout(500);
  23 |   }
  24 | 
  25 |   async loginAndExpectSuccess(email, password) {
  26 |     await this.login(email, password);
> 27 |     expect(this.page.url()).toMatch(/\/home/);
     |                             ^ Error: expect(received).toMatch(expected)
  28 |   }
  29 | 
  30 |   async loginAndExpectFailure(email, password) {
  31 |     await this.login(email, password);
  32 |     expect(this.page.url()).toMatch(/\/auth\/login/);
  33 |   }
  34 | }
  35 | 
```