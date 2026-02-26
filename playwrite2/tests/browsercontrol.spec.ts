import {test} from "@playwright/test";

test("Browser control",async({browser,browserName})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    let page1 = await context.newPage();

    // let size = await page.viewportSize();
    // console.log(size);
    // await page.setViewportSize({width:1200,height:1920});
    // console.log(await page.viewportSize());
    
    await page.goto("https://www.amazon.in/");
    
    // let title = await page.title();
    // console.log(title);


    // await browser.close();
    // await page.locator('#twotabsearchtextbox').fill("shoes");
    
    // let url = await page.url();
    // console.log(await page.url());

    // let time = new Date().getTime();
    // await page.screenshot({path:`screenshot/sc${browserName}${time}.jpg`});
    
    // await browser.close();

    await page1.goto("https://chatgpt.com/");


    console.log(await context.cookies());
    
})