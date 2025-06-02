const { test, expect } = require('@playwright/test');
const testData = require('./dataUser.json');
const LoginPage = require('./pages/LoginPage');
const InventoryPage = require('./pages/InventoryPage');
const CartPage = require('./pages/CartPage');

test.describe('Sauce Demo Tests', () => {
  async function login(page, userType = 'validUser') {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const credentials = testData[userType];
    
    await loginPage.goto();
    await loginPage.login(credentials.username, credentials.password);
    await expect(await inventoryPage.isLoaded()).toBeTruthy();
  }  
  
  test('should add Sauce Labs Backpack to cart and verify', async ({ page }) => {
    await login(page, 'validUser');
    
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    
    await inventoryPage.addToCart('sauce labs backpack');
    await inventoryPage.goToCart();
    const itemName = await cartPage.getItemName();
    expect(itemName).toBe('Sauce Labs Backpack');
    
    const cartBadge = await inventoryPage.getCartCount();
    expect(cartBadge).toBe('1');
  });  
  
  test('should add Sauce Labs Fleece Jacket to cart and verify', async ({ page }) => {
    await login(page, 'validUser');
    
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    
    await inventoryPage.addToCart('sauce labs fleece jacket');
    await inventoryPage.goToCart();
    const itemName = await cartPage.getItemName();
    expect(itemName).toBe('Sauce Labs Fleece Jacket');
    const cartBadge = await inventoryPage.getCartCount();
    expect(cartBadge).toBe('1');
  });  
  
  test('should navigate to About page through hamburger menu', async ({ page }) => {
    await login(page, 'validUser');
    
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.navigateToAbout();
    
    await expect(page).toHaveURL('https://saucelabs.com/');
  });  
  
  test('should show error message for locked out user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const credentials = testData.lockedUser;
    
    await loginPage.goto();
    await loginPage.login(credentials.username, credentials.password);
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Epic sadface: Sorry, this user has been locked out');
  });

  test('should login successfully with performance glitch user', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await login(page, 'performanceUser');
    
    await expect(await inventoryPage.isLoaded(), 'Page should load despite performance glitch').toBeTruthy();
  });
});
