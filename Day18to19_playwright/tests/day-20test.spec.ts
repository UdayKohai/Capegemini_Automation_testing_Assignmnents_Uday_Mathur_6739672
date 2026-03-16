import {test} from '@playwright/test';
import amazon from "../PageObjectModel/day-20.page.ts";
import fs from 'fs';
import path from 'path';

let datafile = fs.readFileSync(path.join(__dirname,'../testdata/day-20.json')); 
let data = JSON.parse(datafile);


test.only("amazon test",async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    let amazonp = new amazon(page);
    let search = data.search;


    await page.goto(data.url);
    await amazonp.searchBtn.fill(search);
    await page.keyboard.press('Enter');

    await amazonp.checkbox.click();

    let [page2] = await Promise.all([
        page.waitForEvent('popup'),
        amazonp.product.nth(3).click()
    ])
    let amazonp2 = new amazon(page2);
    await amazonp2.select(data.quantity);
    await amazonp2.addCartBtn.nth(1).click()

    

    await page.waitForTimeout(5000);

})