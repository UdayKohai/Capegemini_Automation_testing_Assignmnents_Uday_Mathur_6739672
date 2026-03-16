import {test} from '@playwright/test';
import example from "../PageObjectModel/example.page.ts";
import fs from 'fs';
import path from 'path';

let datafile = fs.readFileSync(path.join(__dirname,'../testdata/data.json')); 
let data = JSON.parse(datafile);

test(" ",async({page})=>{
    let examplepage = new example(page);

    for(let d of data.valid){
        let url = d.url;
        let username = d.username;
        let pass = d.password;
        await page.goto(url);
        await examplepage.usernameTF.fill(username);
        await examplepage.passwordTF.fill(pass);
        await examplepage.Click();
        
    }

})


