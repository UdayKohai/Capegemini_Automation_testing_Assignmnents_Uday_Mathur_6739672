import {test} from '@playwright/test'

test("Pro Kabbadi",async({page})=>{
    await page.goto('https://www.prokabaddi.com/schedule-fixtures-results?tab=recent');
    let a = await page.locator('//p[text()="Final"]|//p[text()="Final"]/ancestor::div[@class="fixtures-body"]/descendant::div[@class="team team-a"]/descendant::p[@class="team-name"]|//p[text()="Final"]/ancestor::div[@class="fixtures-body"]/descendant::div[@class="team team-a"]/descendant::p[@class="score"] |//p[text()="Final"]/ancestor::div[@class="fixtures-body"]/descendant::div[@class="team team-b"]/descendant::p[@class="team-name"]|//p[text()="Final"]/ancestor::div[@class="fixtures-body"]/descendant::div[@class="team team-b"]/descendant::p[@class="score"]|//p[text()="Final"]/ancestor::div[@class="fixtures-body"]/descendant::p[@class="match-place"]').allTextContents();
    console.log(a);
    
})