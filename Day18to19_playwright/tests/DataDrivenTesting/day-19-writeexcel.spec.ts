import {test} from "@playwright/test"
import excel from 'exceljs'
import path from "node:path";

test('write excel data',async({page})=>{
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,'../../testdata/newexcel.xlsx'));
    let sheet = await book.getWorksheet('Sheet4');
    if(!sheet){
        sheet = await book.addWorksheet('Sheet4');
    }
    // sheet.getRow(1).getCell(1).value="playwright";

    await page.goto("https://www.amazon.in/");
    await page.locator('//input[@placeholder="Search Amazon.in"]').fill("Phones");

    await page.waitForSelector('//div[@class="s-suggestion-container"]');
    let arr = await page.locator('//div[@class="s-suggestion-container"]').allTextContents(); // taking arr from website 
    let row = arr.length;

    console.log(arr[1]);
    
    for(let r=0;r<row;r++){
        sheet.getRow(r+1).getCell(1).value=arr[r];
    }

    await book.xlsx.writeFile(path.join(__dirname,'../../testdata/newexcel.xlsx'));
});