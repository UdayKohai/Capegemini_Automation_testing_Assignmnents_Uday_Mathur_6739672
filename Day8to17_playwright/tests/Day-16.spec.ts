import {test,expect} from '@playwright/test'

test('Standard_Dropdown',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/dropdown?sublist=0');
    // await page.locator('//select[@id="country_code"]').click();
    // await page.locator('//option[@id="opetion2"]').click()
    // will not work for large applications

    await page.locator('//select[@id="country_code"]').selectOption({value:"+91"});
    await expect(page.locator('#country_code')).toHaveValue('+91');

    // await page.locator('#select3').selectOption({value:'India'});
    await page.locator('#select3').selectOption({index:7});

    await page.locator('#select5').selectOption({value:"Rajasthan"});

    await page.locator('//label[@for="cities"]/following-sibling::select').selectOption({label:'Jaipur'});



    await page.waitForTimeout(2000);
})

test("MultiSelect",async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1');
    await page.locator('#select-multiple-native').selectOption([{index:2},
        {value:"Pierced Owl Rose Gold Plated Stainless Steel Double"},
        {label:"WD 4TB Gaming Drive ..."}
    ]);

    await page.locator('//button[contains(@class,"orange")]').click();

    await page.waitForTimeout(2000);
})

test("Custom Select",async({page})=>{
    await page.goto('https://www.myntra.com/shoes?rawQuery=Shoes');
    await page.locator('.sort-sortBy').click({force:true});
    let cs= await page.locator('//label[@class="sort-label "]').all();
    console.log(cs);
    
    for(let opt of cs){
        let text = await opt.textContent();
        console.log(text);
        if(text?.includes("Better ")){
            await opt.click();
            break;
        }
        
    }

    await page.waitForTimeout(3000);
})


test.only('Amazon',async({page})=>{
    test.slow();
    await page.goto("https://www.amazon.in/");
    await page.locator('//input[@placeholder="Search Amazon.in"]').fill("Shoes");
    await page.waitForTimeout(2000);
    await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]').first().waitFor();
    let list = await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]').all();
    for(let opt of list){
        let text = await opt.textContent();
        if(text?.includes('woman')){
            await opt.click();
            console.log(text);
            break;
        }
        
    }
    await page.waitForTimeout(2000);
    
})