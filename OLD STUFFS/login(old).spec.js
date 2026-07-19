// @ts-check
import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('https://sauce-demo.myshopify.com/');

   // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Sauce Demo');

  const log_in_button = page.locator("#customer_login_link").nth(0);
  await log_in_button.click();

  // to check is on the right site
  await expect(page).toHaveTitle('Account – Sauce Demo');

  const signin_emailaddress = page.locator('#customer_email');
  const signin_password = page.locator('#customer_password');
  const signin_button = page.getByRole('button', { name: 'Sign In' });

  await signin_emailaddress.click();
  await signin_emailaddress.type("kenopy24@hotmail.com",{ delay: 100 });

  await page.waitForTimeout(500);
  
  await signin_emailaddress.click();
  await signin_password.type("Abc12345",{ delay: 100 });
  await expect(signin_button).toBeVisible();
  await signin_button.click();

  await page.pause();

  await expect(page.locator('.accounts-title')).toContainText('Account Details and Order History');

});


