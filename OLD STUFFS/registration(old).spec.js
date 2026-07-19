// @ts-check
import { test, expect } from '@playwright/test';

test('registration', async ({ page }) => {
  await page.goto('https://sauce-demo.myshopify.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Sauce Demo');

  //click into sign up
  const signup_button = page.locator('#customer_register_link').nth(0);
  await signup_button.click();
  await expect(page).toHaveTitle('Create Account – Sauce Demo');

  //filling up the fields with relevant fields
  const signup_firstname = page.locator('#first_name').nth(1);
  const signup_lastname = page.locator('#last_name').nth(1);
  const signup_emailaddress = page.locator('#email').nth(1);;
  const signup_password = page.locator('#password').nth(1);
  const signup_submit = page.getByRole('button', { name: 'Create' });

  await signup_firstname.fill("aaaa");
  await signup_lastname.fill("llll");
  const email = `a${Date.now()}@a.com`;
  console.log(email);
  await signup_emailaddress.fill(email);
  await signup_password.fill('Abc12345');
  await signup_submit.waitFor({ state: 'visible' });

  //testing will stop here as we coudlnt proceed due to captcha
   await page.pause();
  await signup_submit.click({ force: true });
 

  await expect(page).toHaveTitle('Sauce Demo');
  
});


