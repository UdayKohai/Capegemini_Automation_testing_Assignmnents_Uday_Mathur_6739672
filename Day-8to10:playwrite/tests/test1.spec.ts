import { test } from "@playwright/test";

test("title", async ({ browser, browserName }) => {

    let context = await browser.newContext();
    let page = await context.newPage();

    // goto
    await page.goto('https://www.amazon.in/')
    await page.locator('#twotabsearchtextbox').fill("shoes");
    console.log(browserName);
	await page.pause(); //we'll enter into debug mode from this line( but it'll run the previous lines for all the browsers first)
	await page.goto('https://www.amazon.in/')
    await page.locator('#twotabsearchtextbox').fill("shoes");
    console.log(browserName);

});

// test("title2", async ({ browser, browserName }) => {

//     let context = await browser.newContext();
//     let page = await context.newPage();

//     // goto
//     await page.goto('https://www.amazon.in/');
//     await page.locator('#twotabsearchtextbox').fill("shoes");

//     console.log(browserName);

// });