import {test} from "@playwright/test"

test("1 mouse action",async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0');
    // await page.locator('#btn').click({button:"right",clickCount:2});
    await page.locator('#btn').dblclick();

    await page.locator('#btn').hover();
    await page.mouse.down();
    await page.mouse.up();
    
})

test(" ",async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4');
    // await page.locator('#submit').click({force:true});
    await page.locator('#submit').dispatchEvent("click");
      
})

test("dnd",async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2');
//     await page.locator('#dragElement1').hover();
//     await page.mouse.down();
//     await page.locator('//div[@id="dropZone2"]').hover();
//     await page.mouse.up();
    await page.locator('//div[text()="Laptop Charger"]').dragTo(page.locator('//div[text()="Laptop Accessories"]/..'));
    await page.locator('//div[text()="Laptop Cover"]').dragTo(page.locator('//div[text()="Laptop Accessories"]/..'));

    await page.locator('//div[text()="Mobile Charger"]').dragTo(page.locator('//div[text()="Mobile Accessories"]/..'));
    await page.locator('//div[text()="Mobile Cover"]').dragTo(page.locator('//div[text()="Mobile Accessories"]/..'));
    

})

test("scroll", async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabVertical');
    await page.locator('//input').scrollIntoViewIfNeeded();
    await page.locator('//input').check();
    await page.locator('//input').uncheck();

    await page.mouse.move(100,100);
    await page.waitForTimeout(3000);
})


test.only("Keyboard",async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
    await page.locator('//input[@id="name"]').click();
    await page.keyboard.type('Uday');
    await page.keyboard.press('Tab');
    await page.keyboard.type('uday@gmail.com');
    await page.keyboard.press('Control+a');
    await page.keyboard.press('Control+c');
    await page.keyboard.down('Tab');
    await page.keyboard.up;
    await page.keyboard.press('Control+v');



})