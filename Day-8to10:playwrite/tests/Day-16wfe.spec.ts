import {test} from '@playwright/test'
import { url } from 'node:inspector';

test('',async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto('https://flipkart.com');
    await page.locator('//span[@class="b3wTlE"]').click();
    await page.getByPlaceholder('Search for Products, Brands and More').first().fill('Shoes');
    await page.keyboard.press("Enter");

    let [page2] = await Promise.all([
        page.waitForEvent("popup"),
        page.locator('//div[@class="fWB4Ui TTHoOY"]').first().click()
    ]);
    
    // console.log(page);
    // console.log(page2); --> will give you an object as result
    console.log(page.url());
    console.log(page2.url());

    let price = await page2.locator('//div[contains(@class,"v1zwn21k v1zwn20")]').textContent();
    console.log(price);
 
    await page.waitForTimeout(8000);
})

test('Demo',async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto('https://demoapps.qspiders.com/ui/browser/newTab?sublist=1');
    let [page2] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//button[contains(@class,"mt")]').first().click()
    ]);

    let name = await page2.locator('//h1').textContent();
    let brand = await page2.locator('//p[contains(@class,"mb-1")]').first().textContent();

    console.log(name);
    console.log(brand);
    
    await page.waitForTimeout(2000);
})


test('Demo window',async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto('https://demoapps.qspiders.com/ui/browser?sublist=0');
    let [page2] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//button[contains(@class,"mt")]').first().click()
    ]);

    let name = await page2.locator('//h1').textContent();
    let brand = await page2.locator('//p[contains(@class,"mb-1")]').first().textContent();

    console.log(name);
    console.log(brand);
    
    await page.waitForTimeout(2000);
})

test.only("download",async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0');
    await page.locator('//textarea').click();
    await page.keyboard.type('Hello');
    await page.keyboard.press('Tab');
    await page.keyboard.insertText("New.txt")
    await page.keyboard.press('Tab');  
    // await page.keyboard.press('Enter');

    let [download] = await Promise.all([
        page.waitForEvent('download'),
        page.keyboard.press('Enter')
    ]);

    await download.saveAs('Download/New.txt')
    
    await page.waitForTimeout(5000);


})