//31infinitieScroling.spec.ts

import{test,expect} from "@playwright/test"

test("page loading scroll", async({page})=>
{
    test.slow() // it will delay the execution tripple of the default time(3000) to 9000
    await page.goto("https://www.booksbykilo.in/new-books")
    
    let previousHeight = 0
    while(true)
    {
        // scroll the page
        await page.evaluate(() => 
        {
            window.scrollTo(0,document.body.scrollHeight)        }
        )
        await page.waitForTimeout(3000)

        // capturing the page height after scorll
        const currentHeight = await page.evaluate( () =>
            {
                return document.body.scrollHeight;
            }
        )
        console.log("previous height is : ", previousHeight)
        console.log("Current height is : ", currentHeight)
        if (currentHeight === previousHeight)
        {
            break
        }
        previousHeight = currentHeight;
        await page.waitForLoadState()
        await page.waitForTimeout(3000)
    }






}
)