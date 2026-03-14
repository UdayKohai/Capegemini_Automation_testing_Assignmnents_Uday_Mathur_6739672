import {test} from '@playwright/test';

test("Android 12",async({page,browser})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("Phones");
    await page.locator('//input[@id="nav-search-submit-button"]').click();
    await page.locator('//span[ text()="Android 12.0"]/preceding-sibling::div/descendant::i').click();

})