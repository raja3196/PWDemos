//30popUps.spec.ts

import { test,Page, Locator } from "@playwright/test";

test("Handle popups",async({browser})=>
{
    const context = await browser.newContext()
    const parentPage = await context.newPage()

 
    await parentPage.goto("https://testautomationpractice.blogspot.com/")
    await Promise.all([parentPage.waitForEvent('popup'),parentPage.locator("#PopUp").click()])
    await parentPage.waitForTimeout(2000)
    const pagesInfo = context.pages() // it will create array of pages info
    console.log("Opened pages are : ",pagesInfo.length)

    console.log("Page 1 URL is : ", pagesInfo[0].url()) // Parent main page
    console.log("Page 2 URL is : ", pagesInfo[1].url()) // Child page 1
    console.log("Page 3 URL is : ", pagesInfo[2].url()) // Child page 2 
    
    for (const pageDt of pagesInfo)
    {
        const title = await pageDt.title()
        console.log(title)

        if(title.includes('Playwright'))
        {
            pageDt.locator('.getStarted_Sjon').click()
            await parentPage.waitForTimeout(2000)
            await pageDt.close()
        }
    }

    const pagesInfo2 = context.pages() 
    console.log("Opened pages are : ",pagesInfo2.length)
    await parentPage.waitForTimeout(3000)
}
)
