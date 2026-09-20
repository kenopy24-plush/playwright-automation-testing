// @ts-check
import { test, expect } from '@playwright/test';
import { user } from '../data/user';
import { registrationPage } from '../pages/registrationpage';
import { loginPage } from '../pages/loginpage';

test('registration', async ({ page }) => {

    
    const register = new registrationPage(page);

    await page.goto('https://practicesoftwaretesting.com/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0');

    const sign_in_button = page.locator(".nav-link").nth(3);

    await sign_in_button.click();

    const register_your_account = page.locator('[data-test="register-link"]');

    await register_your_account.click();
  

    await register.fillPersonalInfo(user.first,user.last,user.dob);
    await register.address(user.street,user.postal,user.house_number,user.city,user.state,user.country);
    await register.contactANDpassword(user.phone,user.email,user.password);
    
    await register.RegisterButton();

    

    await expect(page).toHaveTitle('Login - Practice Software Testing - Toolshop - v5.0');

    

});

test('login', async ({ page }) => {

    const LoginPage = new loginPage(page);

    await page.goto("https://practicesoftwaretesting.com/auth/login");
    await LoginPage.emailANDpassword(user.email, user.password);
    await LoginPage.loginbuttonClick();
    await expect(page).toHaveTitle('Overview - Practice Software Testing - Toolshop - v5.0');



});
