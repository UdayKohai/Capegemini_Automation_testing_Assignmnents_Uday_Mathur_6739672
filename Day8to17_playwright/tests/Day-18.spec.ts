import {test,expect} from '@playwright/test'

test('',  async({browser})=>{
    let context = await browser.newContext({
        httpCredentials:{
            username:'admin',
            password : 'admin'
        }
    });
    let page = await context.newPage();
    await page.goto('https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/');

    await page.waitForTimeout(2000);
})

test.only('2',  async({browser})=>{
    let context = await browser.newContext({
        httpCredentials:{
            username:'admin',
            password : 'admin'
        }
    });
    let page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/basic_auth');

    await expect(page.locator('//p')).toContainText('Congratulations');

    await page.waitForTimeout(2000);
})

