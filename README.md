# Sauce Demo E2E Tests

This project contains end-to-end tests for the Sauce Demo website using Playwright.

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)
- Visual Studio Code (recommended)

## Installation

1. Clone the repository:
```bash
git clone git@github.com:modalqa/checkoutTest.git
cd checkoutTest
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Project Structure

```
tests/
├── pages/              # Page Object Models
│   ├── CartPage.js
│   ├── InventoryPage.js
│   └── LoginPage.js
├── dataUser.json      # Test user credentials
└── saucedemo.spec.js  # Test specifications
```

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in a specific browser (chromium, firefox, or webkit)
```bash
npx playwright test --project=chromium
```

### Run tests with UI mode
```bash
npx playwright test --ui
```

### Run tests in headed mode (with browser visible)
```bash
npx playwright test --headed
```

### View test report
```bash
npx playwright show-report
```

## Test Cases

1. Login and add Sauce Labs Backpack to cart
2. Login and add Sauce Labs Fleece Jacket to cart
3. Navigate to About page through hamburger menu
4. Verify locked out user error message
5. Test performance glitch user login

## Page Objects

- **LoginPage**: Handles authentication and login-related actions
- **InventoryPage**: Manages product listing and cart operations
- **CartPage**: Handles shopping cart interactions and verifications

## Test Evidence

View the test execution recording and results here:
[Test Execution Evidence](https://jam.dev/c/d47462f8-3006-4d04-b04e-a6e1d143474d)

This link contains:
- Test execution video
- Test results summary
- Browser console logs
- Network requests
- Test steps and assertions