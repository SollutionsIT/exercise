# Живое AQA-задание (~20 минут)

Это небольшой Playwright-сьют для демо веб-приложения. Само приложение
работает корректно — ничего не меняйте внутри `app/`. А вот тестовый сьют —
нет: часть тестов нестабильна, а часть проходит тогда, когда не должна.

Так как вы уже прошли проверку окружения перед этим звонком, здесь те же
зависимости, что и там — `npm install` пройдёт быстро и не потребует заново
скачивать браузер.

```
npm install
npm test
```

Вы увидите, что часть тестов падает, а часть — проходит. Это ожидаемо — пока
ничего не чините.

## Во время звонка

Расшарьте экран и пройдитесь по `tests/login.spec.js`, `tests/profileMenu.spec.js`,
`pageObjects/LoginPage.js` и `pageObjects/ProfileMenu.js`. Проговаривайте вслух,
что вы видите. Чините то,
что находите; мы не ждём, что все 4 теста станут идеальными к концу —
частичный, но осмысленный прогресс — это нормально.

Чтение кода — не единственный способ понять, что тестируется: по умолчанию
`npm test` гоняет браузер headless, так что само приложение вы не увидите.
Несколько способов посмотреть, что происходит на самом деле:

- `npm run app`, затем откройте http://localhost:4321 сами и покликайте
  логин/меню профиля, прежде чем трогать код тестов.
- `npm run test:headed` — увидите браузер вживую во время прогона.
- После любого прогона `npx playwright show-trace test-results/<папка-теста>/trace.zip`
  открывает пошаговый плеер со снапшотами DOM для конкретного прогона —
  полезно, чтобы увидеть, как выглядела страница в момент, когда ассерт
  прошёл или упал.

Мы не оцениваем по тому, стал ли `npm test` зелёным в конце. Сьют может
проходить на 100% и при этом быть бесполезным. Нам важно:

- Какие проблемы вы замечаете и почему они неправильные (а не просто "этот
  тест падает").
- Устраняет ли фикс реальную причину, или просто маскирует симптом (например,
  увеличение таймаута вместо устранения гонки).
- Сохраняете ли вы существующие паттерны (Page Object Model, `allure.step`)
  вместо того, чтобы переписывать всё с нуля.

<details>
<summary>English version</summary>

# Live AQA exercise (~20 min)

This is a small Playwright suite for a demo web app. The app itself works
correctly — don't change anything under `app/`. The test suite doesn't: some
tests are unreliable, and some pass when they shouldn't.

Since you already ran the environment check before this call, this project
uses the same dependencies — `npm install` here should be quick and won't
need to download a browser again.

```
npm install
npm test
```

You should see some tests fail and some pass. That's expected — don't fix
anything yet.

## During the call

Screen-share and work through `tests/login.spec.js`, `tests/profileMenu.spec.js`,
`pageObjects/LoginPage.js` and `pageObjects/ProfileMenu.js`. Talk through what
you're seeing as you go.
Fix what you find; we're not expecting all 4 tests to be perfect by the end —
partial, well-reasoned progress is fine.

Reading the code is not the only way to understand what's being tested — by
default `npm test` runs headless, so you never actually see the app. A few
ways to look at what's actually happening:

- `npm run app`, then open http://localhost:4321 yourself and click through
  the login/profile-menu flow before touching any test code.
- `npm run test:headed` to watch the browser while the suite runs.
- After any run, `npx playwright show-trace test-results/<test-folder>/trace.zip`
  opens a step-by-step player with DOM snapshots for that specific run —
  useful for seeing exactly what the page looked like at the point an
  assertion passed or failed.

We're not scoring on whether `npm test` goes green at the end. A suite can
pass 100% and still be worthless. We care about:

- Which problems you spot, and why they're wrong (not just "this test fails").
- Whether a fix addresses the actual cause, versus papering over the symptom
  (e.g. raising a timeout instead of removing a race condition).
- Whether you keep the existing patterns (Page Object Model, `allure.step`)
  rather than rewriting things from scratch.

</details>
