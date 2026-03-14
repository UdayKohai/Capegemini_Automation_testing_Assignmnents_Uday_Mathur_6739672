import {test} from '@playwright/test'

// test('get by methods',async({page})=>{
//     test.slow();
//     await page.goto('https://practicetestautomation.com/practice-test-login/');
//     // await page.getByLabel('Username',{exact:true}).fill('student');
//     // await page.getByLabel('Password',{exact:true}).fill('Password123');
//     // await page.getByText("Submit").first().click();

//     await page.getByRole("textbox",{name:"Username",exact:true}).fill('student');
// })

// test('get by methods',async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
//     await page.getByPlaceholder("Enter your name",{exact:true}).fill("Uday Za Great");
//     await page.getByPlaceholder("Email").fill('udayzagr8@hotmail.com')
//     await page.getByTestId("",)
// })

test('get by TestId',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId("username").fill("standard_user")
})