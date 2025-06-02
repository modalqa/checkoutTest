class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItems = page.locator('.cart_item');
        this.itemNames = page.locator('.inventory_item_name');
    }

    async getItemName() {
        return await this.itemNames.textContent();
    }

    async isItemInCart(itemName) {
        const items = await this.itemNames.allTextContents();
        return items.includes(itemName);
    }
}

module.exports = CartPage;
