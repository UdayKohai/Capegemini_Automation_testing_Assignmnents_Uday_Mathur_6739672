import {test} from '@playwright/test';

test("Xpath-login",async({page,browserName})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator('//input[@placeholder="Search Amazon.in"]').fill("Phones");
    await page.locator('//input[@type="submit"]').click();
    let name= await page.locator('//h2/child::span | //span[@class="a-price-whole"]').allInnerTexts();
    
    console.log(name);
    
    // console.log(price);
    
});