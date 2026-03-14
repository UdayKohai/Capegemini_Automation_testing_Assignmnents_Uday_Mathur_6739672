import {test} from '@playwright/test'
import path from 'node:path';

test("upload files", async({page})=>{
    console.log(__dirname); //current directory path and name 
    console.log(__filename);  // current file path and name

    await page.goto('https://testautomationpractice.blogspot.com/');

    //--------------------Single File-------------------------------------------
    // // await page.locator('//input[@id="singleFileInput"]').setInputFiles("C:/Users/udaim/OneDrive/Desktop/PlayWright/playwrite2/tests/uploadfile/demo.txt");
    // await page.locator('//input[@id="singleFileInput"]').setInputFiles("C:/Users/udaim/OneDrive/Desktop/PlayWright/dobbydeol.jpg");
    // //|->single file in the local storage outside the playwright folder

    // await page.getByRole("button",{name:'Upload Single File'}).click();

    // //------------------Multiple files---------------------------------------

    // // await page.locator('#multipleFilesInput').setInputFiles(["C:/Users/udaim/OneDrive/Desktop/PlayWright/playwrite2/tests/uploadfile/demo.txt",
    // //     "C:/Users/udaim/OneDrive/Desktop/PlayWright/playwrite2/tests/uploadfile/demo1.xlsx",
    // //     "C:/Users/udaim/OneDrive/Desktop/PlayWright/playwrite2/tests/uploadfile/demo.html"]);

    // await page.locator('#multipleFilesInput').setInputFiles(["C:/Users/udaim/OneDrive/Desktop/PlayWright/dobbydeol.jpg",
    //     "C:/Users/udaim/OneDrive/Desktop/PlayWright/dobbydeol.jpg",
    //     "C:/Users/udaim/OneDrive/Desktop/PlayWright/dobbydeol.jpg"
    // ]); //multiple files outsidde the current directory

    // await page.getByRole("button",{name:'Upload Multiple Files'}).click();

    //?-------------------------------Relative-Path-------------------------------------------------

    await page.locator('//input[@id="singleFileInput"]').setInputFiles(path.join(__dirname,'/uploadfile/demo.txt'));
    await page.getByRole("button",{name:'Upload Single File'}).click();

    //Multiple Files
    await page.locator('#multipleFilesInput').setInputFiles([path.join(__dirname,'/uploadfile/demo.txt'),
        path.join(__dirname,'/uploadfile/demo1.xlsx'),
        path.join(__dirname,'/uploadfile/demo.html')
    ]);
    await page.getByRole("button",{name:'Upload Multiple Files'}).click();


    await page.waitForTimeout(3000);
})


test.only("download",async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0');
    await page.locator('//textarea').click();
    await page.keyboard.type('Hello');
    await page.keyboard.press('Tab');
    // await page.keyboard.insertText("New.txt")
    await page.keyboard.press('Tab');



    let [downloadfile] = await Promise.all([
        page.waitForEvent('download'),
        page.keyboard.press('Enter')
    ]);

    let downloadfolder ="C:/Users/udaim/OneDrive/Desktop/PlayWright/playwrite2/Download";
    let filename = await downloadfile.suggestedFilename();
    console.log(filename);
    
    await downloadfile.saveAs(path.join(downloadfolder,filename));
    
    await page.waitForTimeout(2000);


})