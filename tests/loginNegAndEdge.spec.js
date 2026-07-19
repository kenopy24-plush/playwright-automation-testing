import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginpage';

//Email format invalid
test('loginEmailFormat', async ({ page }) => {

    const LoginPage = new loginPage(page);

    const user = {
        email:"user89 888@test.com",
        password: "Poplo1123##"
    };

   
    const login_button = page.locator('[data-test="login-submit"]');

    await page.goto("https://practicesoftwaretesting.com/auth/login");
    await LoginPage.emailANDpassword(user.email, user.password);
    await LoginPage.loginbuttonClick();

    const emailError = page.getByText("Email format is invalid");

    await expect(emailError).toBeVisible();

});

//Invalid Email
test('loginInvalidEmail', async ({ page }) => {

    const LoginPage = new loginPage(page);

    const user = {
        email:"user89888@test.com",
        password: "Poplo1123##"
    };

   
    const login_button = page.locator('[data-test="login-submit"]');

    await page.goto("https://practicesoftwaretesting.com/auth/login");
    await LoginPage.emailANDpassword(user.email, user.password);
    await LoginPage.loginbuttonClick();

    const emailError = page.locator('[data-test="login-error"]');

    await expect(emailError).toBeVisible();

});

//invalid password
test('loginInvalidPassword', async ({ page }) => {

    const LoginPage = new loginPage(page);

    const user = {
        email:"user88888@test.com",
        password: "Poplo12123##"
    };

   
    const login_button = page.locator('[data-test="login-submit"]');

    await page.goto("https://practicesoftwaretesting.com/auth/login");
    await LoginPage.emailANDpassword(user.email, user.password);
    await LoginPage.loginbuttonClick();

    const emailError = page.locator('[data-test="login-error"]');

    await expect(emailError).toBeVisible();

});