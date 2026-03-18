import {test} from '@playwright/test'

test("Custom waits",async({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.waitForFunction(()=>{
        // return document.readyState == 'complete';  //untill and unless the page is loaded completely it won't go forward
        let ele = document.querySelectorAll('.nav-sprite');
        return ele.length>1;
    });
    console.log(page.title());
    
})
