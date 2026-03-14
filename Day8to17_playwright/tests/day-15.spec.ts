import {test,expect} from '@playwright/test'

// test("1- expect based waits",async({page})=>{
//     await page.goto("https://amazon.com");
//     await page.getByTestId('nav_cs_3').waitFor({timeout:15000,state:"detached"});
//     await page.getByTestId('nav_cs_3').click();

//     // await page.locator('//a[@da=""]').waitFor({timeout:15000,state:"detached"}); 
//     // //\-> because there are multiple data attribute hence it will pass taking partial attribute 
//     // await page.waitForSelector('//a[@data-csa-c-slot-id="nav_cs_1"]');
//     // await page.locator('//a[@data-csa-c-slot-id="nav_cs_1"]').click();

//     // await page.getByTestId('nav_avod_desktop_topnav').click();
// })

test('2 - PageWait', async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto('https://flipkart.com');
    await page.locator('//span[@class="b3wTlE"]').click();
    await page.getByPlaceholder('Search for Products, Brands and More').first().fill('Shoes');
    await page.keyboard.press("Enter");
    // await page.locator('//div[@class="fWB4Ui TTHoOY"]').first().click();
    let [page2] = await Promise.all([page.waitForNavigation(),
    page.locator('//div[@class="fWB4Ui TTHoOY"]').first().click()]);
    
    console.log(await page.url());
    // console.log(await [page2][1].url());

})



