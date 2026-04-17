//dynamicXpath.spec.ts

 // using xpath
/* import { test, expect, Locator  } from "@playwright/test"

test(" Handle Dynamic Elements with Xpath elements", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(2000)

    for(let i=1; i<=5;i++){
        // let btn:Locator = page.locator("//button[text() = 'START' or text()='STOP']")
        // or 
        // let btn:Locator = page.locator('//button[@name="start" or @name="stop"]');
        // or 
        // let btn:Locator = page.locator("//button[contains(@name,'st')]")
        // or 
        let btn:Locator = page.locator("//button[starts-with(@name,'st')]");
        await btn.click()
        await page.waitForTimeout(1000)

    }
})  */

   /*  // using CSS
import { test, expect, Locator } from "@playwright/test"

test("Handle Dynamic Elements with CSS elements", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(2000)

    for(let i=1; i<=5;i++){
        let btn:Locator = page.locator('button[name="start"] , button[name="stop"]'); "  , " indicates  " OR " operator


        await btn.click()

        await page.waitForTimeout(2000)


    }

}) */


     // using playwright specific locators
import { test, expect, Locator } from "@playwright/test"

test("Handle Dynamic Elements with CSS elements", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(2000)

    for(let i=1; i<=5;i++){
        let btn:Locator = page.getByRole('button', {name: /START|STOP/});


        await btn.click()

        await page.waitForTimeout(2000)


    }

})

