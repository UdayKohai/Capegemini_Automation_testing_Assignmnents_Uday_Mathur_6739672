import {test} from '@playwright/test'

test('frames-1',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames');
    let frame = await page.frames();
    console.log(frame.length);

    // console.log(frame);
    

    // for(let i of frame){
    //     console.log(await i.title());
        
    // }
    // await page.title();


    // ----------------------------------
    let frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame1?.locator('//input[@name="mytext1"]').fill("Ooga Booga Booga BoogAaa!");


    let frame2 = await page.frameLocator('//frame[@src="frame_2.html"]');
    await frame2.locator('//input[@name="mytext2"]').fill('Courage The Cowardy Dog');
    // await frame2.fill('//input[@name="mytext2"]','Courage The Cowardy Dog');

    // let frame_2 = await page.locator('//frame[@src="frame_2.html"]').contentFrame();
    // await frame_2?.locator('//input[@name="mytext2"]').fill('Jadugar Raju');


    let frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    await frame3?.frameLocator('//iframe').locator('//div[@class="AB7Lab Id5V1"]').nth(1).check();


    await page.waitForTimeout(4000);
})


