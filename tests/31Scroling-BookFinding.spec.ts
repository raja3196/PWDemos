//31Scroling-BookFinding.spec.ts

import {expect, test} from "@playwright/test"

test("Book find in infinite scroll", async ({page}) =>
{
    await page.goto("https://www.booksbykilo.in/new-books");

    let previousHeight = 0
    let bookFind = false

    while(true)
    {
        const title = await page.locator('#productsDiv h3').allInnerTexts()
        if (title.includes('Great Art Attack Stuff'))
        {
            console.log("Book found")
            bookFind = true
            expect(bookFind).toBeTruthy();
            break;
        }

        // scroll down the page
        await page.evaluate( () => 
        {
            window.scrollTo(0,document.body.scrollHeight)
        }
        )
        await page.waitForTimeout(2000)
        // capture curret page height
        const currentHeight = await page.evaluate( () =>
        {
            return document.body.scrollHeight
        })
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
})