import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginpage';
import { homepage} from '../pages/homepage';
import { user } from '../data/user';



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

    // const user = {
    //     email: `user888888@test.com`,
    //     password: 'Poplo11233##',
    //     product_buy: '[data-test="product-01KTDMVBQV9SX12PTT5S8JB0W8"]'
    // };



    // const login_button = page.locator('[data-test="login-submit"]');

    await page.goto("https://practicesoftwaretesting.com/auth/login");
    await LoginPage.emailANDpassword(user.email, user.password);
    await LoginPage.loginbuttonClick();
    await expect(page).toHaveTitle('Overview - Practice Software Testing - Toolshop - v5.0');

    await page.locator('[data-test="nav-home"]').click();

    await page.waitForLoadState();

    const product_name = await HomePage.product_locked();
    console.log(product_name);


    await page.locator(user.product_buy).click();

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
    country.selectOption("MY");

    await page.locator('[data-test="house_number"]').fill("67");
    await page.locator('[data-test="proceed-3"]').click();


    //payment
    const payment_method = await page.locator('[data-test="payment-method"]');
    // payment_method.click();
    payment_method.selectOption("cash-on-delivery");
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="payment-success-message"]')).toBeVisible();




    // await page.pause();

    //the plan for this will be using a direct flow instead of scanning 
    //no loops for the item selections we go full to purchase cycle



});



test('PurchaseFlow(BankTransfer)', async ({ page }) => {


    const LoginPage = new loginPage(page);
    const HomePage = new homepage(page);

    // const user = {
    //     email: `user888888@test.com`,
    //     password: 'Poplo11233##',
    //     product_buy: '[data-test="product-01KTDMVBQV9SX12PTT5S8JB0W8"]'
    // };


    // const login_button = page.locator('[data-test="login-submit"]');

    await page.goto("https://practicesoftwaretesting.com/auth/login");
    await LoginPage.emailANDpassword(user.email, user.password);
    await LoginPage.loginbuttonClick();
    await expect(page).toHaveTitle('Overview - Practice Software Testing - Toolshop - v5.0');

    await page.locator('[data-test="nav-home"]').click();

    await page.waitForLoadState();

    const product_name = await HomePage.product_locked();

    // const product_name = await page.locator('[data-test="product-name"]').nth(1).textContent();
    console.log(product_name);


    await page.locator(user.product_buy).click();

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
    country.selectOption("MY");

    await page.locator('[data-test="house_number"]').fill("67");
    await page.locator('[data-test="proceed-3"]').click();


    //payment
    const payment_method = await page.locator('[data-test="payment-method"]');
    // payment_method.click();
    payment_method.selectOption("bank-transfer");

    await page.locator('[data-test="bank_name"]').fill("aaaaaa");
    await page.locator('[data-test="account_name"]').fill("12333234aaaaaaaa");
    await page.locator('[data-test="account_number"]').fill("1232333");

    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="payment-success-message"]')).toBeVisible();



});

test('PurchaseFlow(CreditCard)', async ({ page }) => {


    const LoginPage = new loginPage(page);

    // const user = {
    //     email: `user888888@test.com`,
    //     password: 'Poplo11233##',
    //     product_buy: '[data-test="product-01KTDR95WSC9WJ1RVFTRCKAM5T"]'
    // };


    // const login_button = page.locator('[data-test="login-submit"]');

    await page.goto("https://practicesoftwaretesting.com/auth/login");
    await LoginPage.emailANDpassword(user.email, user.password);
    await LoginPage.loginbuttonClick();
    await expect(page).toHaveTitle('Overview - Practice Software Testing - Toolshop - v5.0');

    await page.locator('[data-test="nav-home"]').click();

    await page.waitForLoadState();

    const product_name = await page.locator('[data-test="product-name"]').nth(1).textContent();
    console.log(product_name);


    await page.locator(user.product_buy).click();

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
    country.selectOption("MY");

    await page.locator('[data-test="house_number"]').fill("67");
    await page.locator('[data-test="proceed-3"]').click();


    //payment
    const payment_method = await page.locator('[data-test="payment-method"]');
    // payment_method.click();
    payment_method.selectOption("credit-card");

    await page.locator('[data-test="credit_card_number"]').fill("1111-1111-1111-1111");
    await page.locator('[data-test="expiration_date"]').fill("11/2099");
    await page.locator('[data-test="cvv"]').fill("111");
    await page.locator('[data-test="card_holder_name"]').fill("aaaaaaaaaaaaaa");

    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="payment-success-message"]')).toBeVisible();



});

test('PurchaseFlow(BuyNowPayLater)', async ({ page }) => {


    const LoginPage = new loginPage(page);

    // const user = {
    //     email: `user888888@test.com`,
    //     password: 'Poplo11233##',
    //     product_buy: '[data-test="product-01KTDR95WSC9WJ1RVFTRCKAM5T"]'
    // };


    // const login_button = page.locator('[data-test="login-submit"]');

    await page.goto("https://practicesoftwaretesting.com/auth/login");
    await LoginPage.emailANDpassword(user.email, user.password);
    await LoginPage.loginbuttonClick();
    await expect(page).toHaveTitle('Overview - Practice Software Testing - Toolshop - v5.0');

    await page.locator('[data-test="nav-home"]').click();

    await page.waitForLoadState();

    const product_name = await page.locator('[data-test="product-name"]').nth(1).textContent();
    console.log(product_name);


    await page.locator(user.product_buy).click();

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
    await country.selectOption("MY");
    await page.waitForLoadState('networkidle');

    const houseNumber = page.locator('[data-test="house_number"]');

    await houseNumber.waitFor({ state: 'visible' });
    await houseNumber.fill("11");
    await page.locator('[data-test="proceed-3"]').click();


    //payment
    const payment_method = await page.locator('[data-test="payment-method"]');
    // payment_method.click();
    payment_method.selectOption("buy-now-pay-later");

    const duration = await page.locator('[data-test="monthly_installments"]');
    duration.selectOption("3");

    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="payment-success-message"]')).toBeVisible();



});

test.only('PurchaseFlow(GiftCode)', async ({ page }) => {


    const LoginPage = new loginPage(page);

    const user = {
        email: `user888888@test.com`,
        password: 'Poplo11233##',
        product_buy: '[data-test="product-01KTDR95WSC9WJ1RVFTRCKAM5T"]'
    };


    // const login_button = page.locator('[data-test="login-submit"]');

    await page.goto("https://practicesoftwaretesting.com/auth/login");
    await LoginPage.emailANDpassword(user.email, user.password);
    await LoginPage.loginbuttonClick();
    await expect(page).toHaveTitle('Overview - Practice Software Testing - Toolshop - v5.0');

    await page.locator('[data-test="nav-home"]').click();

    await page.waitForLoadState();

    const product_name = await page.locator('[data-test="product-name"]').nth(1).textContent();
    console.log(product_name);


    await page.locator(user.product_buy).click();

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
    await country.selectOption("MY");
    await page.waitForLoadState('networkidle');

    const houseNumber = page.locator('[data-test="house_number"]');

    await houseNumber.waitFor({ state: 'visible' });
    await houseNumber.fill("11");
    await page.locator('[data-test="proceed-3"]').click();


    //payment
    const payment_method = await page.locator('[data-test="payment-method"]');
    // payment_method.click();
    payment_method.selectOption("gift-card");

    await page.locator('[data-test="gift_card_number"]').fill("adad2313131");
    await page.locator('[data-test="validation_code""]').fill("adad231313122222");

    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="payment-success-message"]')).toBeVisible();



});




