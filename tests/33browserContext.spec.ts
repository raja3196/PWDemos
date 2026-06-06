//33browserContext.spec.ts

import {test,expect,chromium} from "@playwright/test"

test('browser settings', async()=>{

const browser=await chromium.launch({headless:false});  // runs in headed mode - we can see UI
//const browser=await chromium.launch({headless:true});  // runs in headedless mode - we can't see UI
    
const context=await browser.newContext();

const page=await context.newPage();

 //  Simulate maximize the page: set large viewport size
  await page.setViewportSize({ width: 1920, height: 1080 });// maximize the page by setting size

  //Minimize the page : (Not Directly Supported)
 // Simulate minimize
//await page.setViewportSize({ width: 1, height: 1 });



await page.goto("https://www.google.com/");
//await page.goto("https://expired.badssl.com/");

console.log("title of the page:", await page.title());


await page.waitForTimeout(7000);

})

test.only("2 Browser Settings", async() =>
{

    const Browser = await chromium.launch({headless:false}); // // runs in headed mode - we can see UI
    // const Browser = await chromium.launch({headless:true}); // // runs in headed mode - we can't see UI
    const context = await Browser.newContext();
    const page = await context.newPage();
    await page.goto("https://google.com")
    await page.waitForTimeout(5000)

    

}
)
