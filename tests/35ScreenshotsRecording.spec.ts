//  

import { test, expect } from "@playwright/test";

test("Capture Screenshot", async ({page}) =>
{   
    const timeStamp = Date.now()
    await page.goto("https://demowebshop.tricentis.com/");
    
    // to capture the current display page
    await page.screenshot({path:'screenshots/'+'homepage'+timeStamp+'.png'});

    //full page screenshot
    await page.screenshot({path:'screenshots/'+'fullpage'+timeStamp+'.png', fullPage:true});

    // element screenshot
    const logo = page.locator("img[alt='Tricentis Demo Web Shop']");
    await logo.screenshot({path:'screenshots/'+'logo'+timeStamp+'.png'})

    const fetureProducts = page.locator(".product-grid.home-page-product-grid")
    await fetureProducts.screenshot({path:'screenshots/'+'products'+timeStamp+'.png'})

}
);

