import {test,expect} from "@playwright/test"
test.use({actionTimeout:4000})  //->  to change the timeout or auto wait of all the tests in a file
// test.setTimeout(1000);-> to change the timeout or auto wait of all the tests in a file

test("1",async({page})=>{
    // await page.setDefaultTimeout(6000);
    //  -> to change timeout/autowait for a specific test block
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    // let h2 = await page.locator("//h2");
    // await expect.soft(page.locator("//h2")).toHaveText("Test");
    // expect(h2).toHaveText("Test");

    // await page.getByLabel('Usernamo',{exact:true}).fill('student',{timeout:1000}); 
    // |-> to change timeout/autowait for a specific elementcontrol method

    await page.getByLabel('Usernamo',{exact:true}).fill('student');
    // await page.waitForTimeout(8000); // -> hard wait 
    await page.getByLabel('Password',{exact:true}).fill('Password123');
    await page.getByText("Submit").first().click();
})