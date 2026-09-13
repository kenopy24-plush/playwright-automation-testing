import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginpage';
import { homepage} from '../pages/homepage';
import { purchaseFlowData } from '../data/purchaseflow';



//bank transfer (done)
//COD (done)
//credit card(done)
//buy now pay later (done)
//gift card (done)

//optimization path
// bank transfer



//COD method
test('PurchaseFlow(CashOnDelivery)', async ({ page }) => {

    const LoginPage = new loginPage(page);
    const HomePage = new homepage(page);

    // const login_button = page.locator('[data-test="login-submit"]');

    await page.goto(purchaseFlowData.loginUrl);
    await LoginPage.emailANDpassword(purchaseFlowData.user.email, purchaseFlowData.user.password);
    await LoginPage.loginbuttonClick();
    await expect(page).toHaveTitle(purchaseFlowData.overviewTitle);

    await page.locator('[data-test="nav-home"]').click();

    await page.waitForLoadState();

    const product_name = await HomePage.product_locked();
    console.log(product_name);


    await page.locator(purchaseFlowData.products.standard).click();

    await page.waitForLoadState();

    await HomePage.addtocart_button.click();

    await HomePage.cart_button.click();

    const product_name_cart = await page.locator('[data-test="product-title"]').nth(0).textContent();
    console.log(product_name_cart);

    if (product_name.trim() === product_name_cart.trim()) {
        console.log("Item Matched");
    } else {
        throw new Error("Item NOT matched in cart");
    }

    //Proceed to checkout
    await page.locator('[data-test="proceed-1"]').click();

    //proceed to checkout 2
    await page.locator('[data-test="proceed-2"]').click();

    //billing address
    const country = await page.locator('[data-test="country"]');

    // country.click();
    country.selectOption(purchaseFlowData.billing.country);

    await page.locator('[data-test="house_number"]').fill(purchaseFlowData.billing.standardHouseNumber);
    await page.locator('[data-test="proceed-3"]').click();


    //payment
    const payment_method = await page.locator('[data-test="payment-method"]');
    // payment_method.click();
    payment_method.selectOption(purchaseFlowData.payments.cashOnDelivery.method);
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="payment-success-message"]')).toBeVisible();




    // await page.pause();

    //the plan for this will be using a direct flow instead of scanning 
    //no loops for the item selections we go full to purchase cycle



});



test('PurchaseFlow(BankTransfer)', async ({ page }) => {


    const LoginPage = new loginPage(page);
    const HomePage = new homepage(page);

    // const login_button = page.locator('[data-test="login-submit"]');

    await page.goto(purchaseFlowData.loginUrl);
    await LoginPage.emailANDpassword(purchaseFlowData.user.email, purchaseFlowData.user.password);
    await LoginPage.loginbuttonClick();
    await expect(page).toHaveTitle(purchaseFlowData.overviewTitle);

    await page.locator('[data-test="nav-home"]').click();

    await page.waitForLoadState();

    const product_name = await HomePage.product_locked();

    // const product_name = await page.locator('[data-test="product-name"]').nth(1).textContent();
    console.log(product_name);


    await page.locator(purchaseFlowData.products.standard).click();

    await page.waitForLoadState();
    await HomePage.addtocart_button.click();

    // await page.locator('[data-test="add-to-cart"]').click();

    await page.locator('[data-test="nav-cart"]').click();

    const product_name_cart = await page.locator('[data-test="product-title"]').nth(0).textContent();
    console.log(product_name_cart);

    if (product_name.trim() === product_name_cart.trim()) {
        console.log("Item Matched");
    } else {
        throw new Error("Item NOT matched in cart");
    }

    //Proceed to checkout
    await page.locator('[data-test="proceed-1"]').click();

    //proceed to checkout 2
    await page.locator('[data-test="proceed-2"]').click();

    //billing address
    const country = await page.locator('[data-test="country"]');

    // country.click();
    country.selectOption(purchaseFlowData.billing.country);

    await page.locator('[data-test="house_number"]').fill(purchaseFlowData.billing.standardHouseNumber);
    await page.locator('[data-test="proceed-3"]').click();


    //payment
    const payment_method = await page.locator('[data-test="payment-method"]');
    // payment_method.click();
    payment_method.selectOption(purchaseFlowData.payments.bankTransfer.method);

    await page.locator('[data-test="bank_name"]').fill(purchaseFlowData.payments.bankTransfer.bankName);
    await page.locator('[data-test="account_name"]').fill(purchaseFlowData.payments.bankTransfer.accountName);
    await page.locator('[data-test="account_number"]').fill(purchaseFlowData.payments.bankTransfer.accountNumber);

    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="payment-success-message"]')).toBeVisible();



});

test('PurchaseFlow(CreditCard)', async ({ page }) => {


    const LoginPage = new loginPage(page);

    // const login_button = page.locator('[data-test="login-submit"]');

    await page.goto(purchaseFlowData.loginUrl);
    await LoginPage.emailANDpassword(purchaseFlowData.user.email, purchaseFlowData.user.password);
    await LoginPage.loginbuttonClick();
    await expect(page).toHaveTitle(purchaseFlowData.overviewTitle);

    await page.locator('[data-test="nav-home"]').click();

    await page.waitForLoadState();

    const product_name = await page.locator('[data-test="product-name"]').nth(1).textContent();
    console.log(product_name);


    await page.locator(purchaseFlowData.products.standard).click();

    await page.waitForLoadState();

    await page.locator('[data-test="add-to-cart"]').click();

    await page.locator('[data-test="nav-cart"]').click();

    const product_name_cart = await page.locator('[data-test="product-title"]').nth(0).textContent();
    console.log(product_name_cart);

    if (product_name.trim() === product_name_cart.trim()) {
        console.log("Item Matched");
    } else {
        throw new Error("Item NOT matched in cart");
    }

    //Proceed to checkout
    await page.locator('[data-test="proceed-1"]').click();

    //proceed to checkout 2
    await page.locator('[data-test="proceed-2"]').click();

    //billing address
    const country = await page.locator('[data-test="country"]');

    // country.click();
    country.selectOption(purchaseFlowData.billing.country);

    await page.locator('[data-test="house_number"]').fill(purchaseFlowData.billing.standardHouseNumber);
    await page.locator('[data-test="proceed-3"]').click();


    //payment
    const payment_method = await page.locator('[data-test="payment-method"]');
    // payment_method.click();
    payment_method.selectOption(purchaseFlowData.payments.creditCard.method);

    await page.locator('[data-test="credit_card_number"]').fill(purchaseFlowData.payments.creditCard.cardNumber);
    await page.locator('[data-test="expiration_date"]').fill(purchaseFlowData.payments.creditCard.expirationDate);
    await page.locator('[data-test="cvv"]').fill(purchaseFlowData.payments.creditCard.cvv);
    await page.locator('[data-test="card_holder_name"]').fill(purchaseFlowData.payments.creditCard.cardHolderName);

    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="payment-success-message"]')).toBeVisible();



});

test('PurchaseFlow(BuyNowPayLater)', async ({ page }) => {


    const LoginPage = new loginPage(page);

    // const login_button = page.locator('[data-test="login-submit"]');

    await page.goto(purchaseFlowData.loginUrl);
    await LoginPage.emailANDpassword(purchaseFlowData.user.email, purchaseFlowData.user.password);
    await LoginPage.loginbuttonClick();
    await expect(page).toHaveTitle(purchaseFlowData.overviewTitle);

    await page.locator('[data-test="nav-home"]').click();

    await page.waitForLoadState();

    const product_name = await page.locator('[data-test="product-name"]').nth(1).textContent();
    console.log(product_name);


    await page.locator(purchaseFlowData.products.standard).click();

    await page.waitForLoadState();

    await page.locator('[data-test="add-to-cart"]').click();

    await page.locator('[data-test="nav-cart"]').click();

    const product_name_cart = await page.locator('[data-test="product-title"]').nth(0).textContent();
    console.log(product_name_cart);

    if (product_name.trim() === product_name_cart.trim()) {
        console.log("Item Matched");
    } else {
        throw new Error("Item NOT matched in cart");
    }

    //Proceed to checkout
    await page.locator('[data-test="proceed-1"]').click();

    //proceed to checkout 2
    await page.locator('[data-test="proceed-2"]').click();

    //billing address
    const country = page.locator('[data-test="country"]');

    // country.click();
    await country.selectOption(purchaseFlowData.billing.country);
    await page.waitForLoadState('networkidle');

    const houseNumber = page.locator('[data-test="house_number"]');

    await houseNumber.waitFor({ state: 'visible' });
    await houseNumber.fill(purchaseFlowData.billing.buyNowPayLaterHouseNumber);
    await page.locator('[data-test="proceed-3"]').click();


    //payment
    const payment_method = await page.locator('[data-test="payment-method"]');
    // payment_method.click();
    payment_method.selectOption(purchaseFlowData.payments.buyNowPayLater.method);

    const duration = await page.locator('[data-test="monthly_installments"]');
    duration.selectOption(purchaseFlowData.payments.buyNowPayLater.installments);

    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="payment-success-message"]')).toBeVisible();



});

test.only('PurchaseFlow(GiftCode)', async ({ page }) => {


    const LoginPage = new loginPage(page);

    // const login_button = page.locator('[data-test="login-submit"]');

    await page.goto(purchaseFlowData.loginUrl);
    await LoginPage.emailANDpassword(purchaseFlowData.user.email, purchaseFlowData.user.password);
    await LoginPage.loginbuttonClick();
    await expect(page).toHaveTitle(purchaseFlowData.overviewTitle);

    await page.locator('[data-test="nav-home"]').click();

    await page.waitForLoadState();

    const product_name = await page.locator('[data-test="product-name"]').nth(1).textContent();
    console.log(product_name);


    await page.locator(purchaseFlowData.products.giftCard).click();

    await page.waitForLoadState();

    await page.locator('[data-test="add-to-cart"]').click();

    await page.locator('[data-test="nav-cart"]').click();

    const product_name_cart = await page.locator('[data-test="product-title"]').nth(0).textContent();
    console.log(product_name_cart);

    if (product_name.trim() === product_name_cart.trim()) {
        console.log("Item Matched");
    } else {
        throw new Error("Item NOT matched in cart");
    }

    //Proceed to checkout
    await page.locator('[data-test="proceed-1"]').click();

    //proceed to checkout 2
    await page.locator('[data-test="proceed-2"]').click();

    //billing address
    const country = page.locator('[data-test="country"]');

    // country.click();
    await country.selectOption(purchaseFlowData.billing.country);
    await page.waitForLoadState('networkidle');

    const houseNumber = page.locator('[data-test="house_number"]');

    await houseNumber.waitFor({ state: 'visible' });
    await houseNumber.fill(purchaseFlowData.billing.buyNowPayLaterHouseNumber);
    await page.locator('[data-test="proceed-3"]').click();


    //payment
    const payment_method = await page.locator('[data-test="payment-method"]');
    // payment_method.click();
    payment_method.selectOption(purchaseFlowData.payments.giftCard.method);

    await page.locator('[data-test="gift_card_number"]').fill(purchaseFlowData.payments.giftCard.cardNumber);
    await page.locator('[data-test="validation_code"]').fill(purchaseFlowData.payments.giftCard.validationCode);

    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="payment-success-message"]')).toBeVisible();



});
