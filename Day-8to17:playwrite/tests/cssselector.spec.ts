import {test} from '@playwright/test'

test("Css Selector",async({page,browserName})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator('input[name="username"]').fill("student");
    await page.locator('input#password').fill('Password123');
    await page.locator('button#submit.btn').click();
    await page.locator('.wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color').click();

    // await page.goto("https://techbeamers.com/practice-test-login/");
    // await page.locator('input#username').fill("testuser");
    // await page.locator('input#password').fill("password123");
    // await page.locator('button[type="submit"]').click();

    console.log(browserName);
    
})