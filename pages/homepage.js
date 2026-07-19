export class homepage{

    constructor(page){
        this.product_locked = page.locator('[data-test="product-name"]').nth(1).textContent();
        this.addtocart_button = page.locator('[data-test="add-to-cart"]');
        this.cart_button = page.locator('[data-test="nav-cart"]');
    }


}