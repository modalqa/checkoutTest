class InventoryPage {
    constructor(page) {
        this.page = page;
        this.inventoryList = page.locator('.inventory_list');
        this.shoppingCartLink = page.locator('.shopping_cart_link');
        this.shoppingCartBadge = page.locator('.shopping_cart_badge');
        this.hamburgerMenu = page.locator('#react-burger-menu-btn');
        this.aboutLink = page.locator('#about_sidebar_link');
    }

    async isLoaded() {
        return await this.inventoryList.isVisible();
    }

    async addToCart(itemName) {
        const selector = `[data-test="add-to-cart-${itemName.toLowerCase().replace(/ /g, '-')}"]`;
        await this.page.click(selector);
    }

    async getCartCount() {
        return await this.shoppingCartBadge.textContent();
    }

    async goToCart() {
        await this.shoppingCartLink.click();
    }

    async openMenu() {
        await this.hamburgerMenu.click();
    }

    async navigateToAbout() {
        await this.openMenu();
        await this.aboutLink.click();
    }
}

module.exports = InventoryPage;
