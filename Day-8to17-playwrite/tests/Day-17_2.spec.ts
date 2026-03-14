import {test} from '@playwright/test'



test("npop",async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();

    page.on('dialog',async(d)=>{
        // await d.accept();
        if(d.type()=='alert'){
            await d.accept(" ");
        }
        else if(d.type() == 'confirm'){
            await d.dismiss();
            console.log( await d.message() );
            
        }
        else if (d.type()=='prompt'){
            // await d.accept("Babu Bhaiya");
            // console.log(await d.defaultValue());
            if(d.defaultValue()!='Chintu'){
                await d.accept('Chintu')
            }else{
                console.log((await d.defaultValue()));
                await d.accept(d.defaultValue());
            }
            console.log( await d.message());
        }
    });
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    // page.once('dialog',async(d)=>{
    //     await d.accept();
    // });
    await page.getByRole("button",{name:'Simple Alert'}).click();
    console.log(await page.locator('//p[@id="demo"]').textContent());
    
    // page.once('dialog',async(d)=>{
    //     await d.accept();
    // });
    await page.getByRole("button",{name:'Confirmation Alert'}).click();
    console.log(await page.locator('//p[@id="demo"]').textContent());

    // page.once('dialog',async(di)=>{
    //     await di.accept("JOnathan JOstarr");
    // });
    await page.getByRole("button",{name:'Prompt Alert'}).click();
    console.log(await page.locator('//p[@id="demo"]').textContent());


    await page.waitForTimeout(4000);
})
