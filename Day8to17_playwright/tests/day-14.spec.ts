import {test,expect} from '@playwright/test'

// test('get by methods',async({page})=>{
//     await page.goto('https://practicetestautomation.com/practice-test-login/');
//     //await page.getByLabel('Username',{exact:true}).type('student1');
//     await page.getByLabel('Username',{exact:true}).type('student');

//     //await page.getByLabel('Password',{exact:true}).fill('Password1234');
//     await page.getByLabel('Password',{exact:true}).fill('Password123');

//     let name = await page.getByLabel('Username',{exact:true}).isEnabled();
//     console.log(name);
    
//     // await page.getByText("Submit").first().click();

// })

test('Amazon',async({page})=>{
    test.slow();
    await page.goto("https://www.amazon.in/");
    await page.locator('//input[@placeholder="Search Amazon.in"]').fill("Shoes");
    await page.locator('//input[@type="submit"]').click();
    await page.locator('//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]/span').first().waitFor();
    let ele = await page.locator('//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]/span').allTextContents();

    console.log(ele);
})