import {test} from '@playwright/test';
import ss from "../PageObjectModel/day20-ss.page.ts";
import fs from 'fs';
import path from 'path';

let datafile = fs.readFileSync(path.join(__dirname,'../testdata/day-20-ss.json')); 
let data = JSON.parse(datafile);

test("SS",async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    let ss1 = new ss(page);

    let url = data.url;
    let fname = data.fname;
    let lname = data.lname;
    let phone = data.phone;
    let email = data.email;
    let gender = data.gender;
    let password = data.password;
    let search = data.search;

    await page.goto(url);
    await ss1.loginBtn.click();
    await ss1.createAccBtn.click();
    await ss1.firstNameInp.fill(fname);
    await ss1.lNameInp.fill(lname);
    if(gender=='Male'){
        await ss1.genderMale.click();
    }
    else if(gender=='Feale'){
        await ss1.genderMale.click();
    }
    else if(gender=='Other'){
        await ss1.genderMale.click();
    }

    await ss1.phoneInp.fill(phone);
    await ss1.emailInp.fill(email);
    await ss1.passwordInp.fill(password);
    await ss1.confPasswordInp.fill(password);
    await ss1.tncCbox.click();
    await ss1.registerBtn.click();

    await page.goto(url);

    await ss1.loginBtn.click();
    await ss1.LoginEmail.fill(email);
    await ss1.LoginPass.fill(password);
    await ss1.LoginBtn.click();

    await ss1.search(search);



    await page.waitForTimeout(5000);
})


