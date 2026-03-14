import {test} from '@playwright/test';

test("Xpath-login",async({page,browserName})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("Samsung Phones");
    await page.locator('//input[@id="nav-search-submit-button"]').click();
    // let price = await page.locator('(//span[@class="a-price-whole"])').first().innerText();
    let price = await page.locator('(//span[@class="a-price-whole"])').nth(5).innerText();
    // let price = await page.locator('(//span[@class="a-price-whole"])').last().innerText();
    console.log(price);
    
});