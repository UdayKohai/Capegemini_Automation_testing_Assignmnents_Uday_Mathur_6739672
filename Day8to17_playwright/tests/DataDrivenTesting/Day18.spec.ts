import {test} from '@playwright/test'
import excel from 'exceljs'
import path from 'node:path';

test('read single cell excel data',async()=>{
    let book = new excel.Workbook();  //workbook is a constructor, no return type
    await book.xlsx.readFile(path.join(__dirname,'../../testdata/readexcel.xlsx')); //we need to go back to the main directory hence ../../ is used
    let sheet = await book.getWorksheet("Sheet1");
    // let  data= await sheet?.getRow(1).getCell(1).value;
    let  data= await sheet?.getRow(1).getCell(1).toString();  //conv data into string

    console.log(data);
})

test('read multiple cell excel data',async()=>{
    let book = new excel.Workbook(); 
    await book.xlsx.readFile(path.join(__dirname,'../../testdata/newexcel.xlsx'));
    let sheet = await book.getWorksheet("Sheet1");
    // let  data= await sheet?.getRow(1).getCell(1).value;

    console.log(sheet?.actualRowCount);
    let row = sheet?.actualColumnCount;
    console.log(sheet?.actualColumnCount);
    let col = sheet?.actualColumnCount;
    
    
    for(let i = 1;i<=row;i++){
        for(let j =1;j<=col;j++){
            let  data= await sheet?.getRow(i).getCell(j).value;
            console.log(data);
            
        }
    }
})


test('Login using excel data',async({page})=>{
    let book = new excel.Workbook(); 
    await book.xlsx.readFile(path.join(__dirname,'../../testdata/newexcel.xlsx'));
    let sheet = await book.getWorksheet("Sheet2");

    let link = await sheet?.getRow(1).getCell(1).toString();
    console.log(link);
    
    await page.goto(link);

    let name = await sheet?.getRow(1).getCell(2).toString();
    let email = await sheet?.getRow(1).getCell(3).toString();
    let pass = await sheet?.getRow(1).getCell(4).toString();

    await page.locator('//input[@id="name"]').fill(name);
    await page.keyboard.press('Tab');
    await page.keyboard.insertText(email);
    await page.keyboard.press('Tab');
    await page.keyboard.insertText(pass);

    await page.getByRole('button',{name:'Register'}).click();

    await page.getByLabel('Email Id').fill(email);
    await page.getByLabel('Password').fill(pass);
    await page.getByRole('button',{name:'Login'}).click()

    await page.waitForTimeout(2000);
})

test.only('Login using excel multiple data',async({page})=>{
    let book = new excel.Workbook(); 
    await book.xlsx.readFile(path.join(__dirname,'../../testdata/newexcel.xlsx'));
    let sheet = await book.getWorksheet("Sheet2");
    let row = sheet?.actualColumnCount;
    let col = sheet?.actualColumnCount;
    let link = await sheet?.getRow(1).getCell(1).toString();

    for(let i = 1;i<=row-1;i++){
        let name = await sheet?.getRow(i).getCell(2).toString();
        let email = await sheet?.getRow(i).getCell(3).toString();
        let pass = await sheet?.getRow(i).getCell(4).toString();

        await page.goto(link);

        await page.locator('//input[@id="name"]').fill(name);
        await page.keyboard.press('Tab');
        await page.keyboard.insertText(email);
        await page.keyboard.press('Tab');
        await page.keyboard.insertText(pass);

        await page.getByRole('button',{name:'Register'}).click();

        await page.getByLabel('Email Id').fill(email);
        await page.getByLabel('Password').fill(pass);
        await page.getByRole('button',{name:'Login'}).click()

        await page.waitForTimeout(2000);
        // await page.close();
    }
    
    
})














//Rudolhph the red nose raindeer sings, glory to the new born king.