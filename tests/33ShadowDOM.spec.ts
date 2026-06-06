//33ShadowDOM.spec.ts

import { test, expect } from "@playwright/test"

test.only('shadow dom2', async ({page})=>{

    await page.goto("https://shop.polymer-project.org/")

    await page.locator("a[aria-label=\"Men's Outerwear Shop Now\"]").click();
    await page.waitForTimeout(5000);

    const productsfound=await page.locator('div.title').all();

    console.log("Number of products found:",productsfound.length);

     expect(productsfound.length).toBe(16);
    
 await page.waitForTimeout(3000);

})

