import {test} from '@playwright/test'

test("Xpath-login",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator('//input[@name="username"]').fill("student");
    await page.locator('//input[@id="password"]').fill('Password123');
    await page.locator('//button[@id="submit"]').click();
    await page.locator('//a[text()="Log out"]').click();
});