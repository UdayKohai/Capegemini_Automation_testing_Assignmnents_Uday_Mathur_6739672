import {test} from '@playwright/test';
import fs from 'fs';
import path from 'path';

// path.join(__dirname,'../../testdata/data.json');
let datafile = fs.readFileSync(path.join(__dirname,'../../testdata/data.json')); 
let data = JSON.parse(datafile); // we are converting json object to JS object

test('jason data',async({page})=>{
    // console.log(data.greet);
    data.forEach(d => {
        console.log(d.greet);
    });
    
})

test.only("application data",async({page})=>{

    // await page.goto(data.url);
    // await page.getByLabel("Username").fill(data.username);
    // await page.getByLabel("Password").fill(data.password); //FOR 1 object in json file
    // await page.getByRole("button",{name:"Submit"}).click()

    //array of object

    for(let d of data.invalid){
        let url = d.url;
        let username = d.username;
        let pass = d.password;
        console.log(url,username,pass);
        await page.goto(url);
        await page.getByLabel("Username").fill(username);
        await page.getByLabel("Password").fill(pass);
        await page.getByRole("button",{name:"Submit"}).click()
        
    }

    await page.waitForTimeout(2000);
})