//30AuthticationPopUps.spec.ts

import {test,expect} from "@playwright/test"
test("handle Autanticate popup", async ({browser})=>

{
   const context = await browser.newContext({httpCredentials:{username:'admin',password:'admin'}})
    // browser context is used to pass username and password. 
    // Syntax is {httpCredentials:{username:'admin',password:'admin'}} - its a key value pair

    const page = await context.newPage()

    // Aproch 1 
    // syntax to pass user name and password
    //'https://username:password@the-internet.herokuapp.com/basic_auth'


    // await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth') // passing usernaeme, password along with URL 
    // await expect(page.locator('text=Congratulations')).toBeVisible()
    // const isVisible = await page.locator("//p[contains(text(),'Congratulations')]").isVisible() // written true if exist else false
    // console.log("isVisible method verification",isVisible) // verifying page is visible or not
    // await page.waitForLoadState()



    // 2nd Approch - playwright suggested approch
    await page.goto('https://the-internet.herokuapp.com/basic_auth')
    await expect(page.locator('text=Congratulations')).toBeVisible()
    const isVisible = await page.locator("//p[contains(text(),'Congratulations')]").isVisible() // written true if exist else false
    console.log("isVisible method verification",isVisible) // verifying page is visible or not
    await page.waitForLoadState()


    await page.waitForTimeout(2000)
}
)