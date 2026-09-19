export class homepage {

    constructor(page) {
        this.product_locked_locator = page.locator('[data-test="product-name"]').nth(1);
        this.addtocart_button = page.locator('[data-test="add-to-cart"]');
        this.cart_button = page.locator('[data-test="nav-cart"]');
    }

    async product_locked() {
        await this.product_locked_locator.waitFor({ state: 'visible' });
        return (await this.product_locked_locator.textContent())?.trim();
    }


}