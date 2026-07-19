import { test, expect } from '@playwright/test';
import { registrationPage } from '../pages/registrationpage';
import { generateDOB, generatePhoneNumber } from '../utils/dataGen';

test('registrationInvalidFormats', async ({ page }) => {

    
    const register = new registrationPage(page);

    //user config
    const user = {
        first: 'John',
        last: 'Doe',
        dob: '21332112',
        street: '123 Test Street',
        postal: '47800',
        housenumber: '80',
        city: 'Petaling Jaya',
        state: 'Selangor',
        country: 'MY',
        phone: 'sdasdasdas',
        email: `user88888test.com`,
        password: 'Bfw491949141414'
    };

    await page.goto('https://practicesoftwaretesting.com/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0');

    const sign_in_button = page.locator(".nav-link").nth(3);

    await sign_in_button.click();

    const register_your_account = page.locator('[data-test="register-link"]');

    await register_your_account.click();

    await register.fillPersonalInfo(user.first,user.last,user.dob);
    await register.address(user.street,user.postal,user.housenumber,user.city,user.state,user.country);
    await register.contactANDpassword(user.phone,user.email,user.password);
    await register.RegisterButton();

    const InvalidDOBError = page.locator('[data-test="dob-error"]');
    const PhoneError = page.locator('[data-test="phone-error"]');
    const EmailError = page.locator('[data-test="email-error"]');
    const PasswordError = page.locator('[data-test="password-error"]');


    await expect(InvalidDOBError).toBeVisible();
    await expect(PhoneError).toBeVisible();
    await expect(EmailError).toBeVisible();
    await expect(PasswordError).toBeVisible();

    

});