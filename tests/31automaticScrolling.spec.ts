//31automaticScrolling.spec.ts

import {test,expect} from "@playwright/test"

test("Automatic scroling demo", async ({page}) =>
{
    await page.goto("https://demowebshop.tricentis.com/")

    const footerText:string = await page.locator('.footer-disclaimer').innerText()
    await page.waitForTimeout(2000)
    console.log("Footer text is : ", footerText)
    await page.locator('.footer-disclaimer').focus()

    await page.waitForTimeout(2000)
})

test("scroling Inside dropdown", async({page}) =>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#comboBox').click()
    const option = page.locator('#dropdown div:nth-child(100)')
    console.log("option value is : ", option.innerText())
    await option.click()
    await page.waitForTimeout(2000)

})

test.only ("Table dropdown", async({page})=>
{
    await page.goto('https://datatables.net/examples/basic_init/scroll_x.html');
    await page.waitForTimeout(2000)
    const name  = await page.locator("tbody tr:nth-child(10) td:nth-child(2)").innerText()
    console.log("Name in the table is: ", name)
                                        // table row            table column
    const eMail  = await page.locator("tbody tr:nth-child(10) td:nth-child(9)").innerText()
    console.log("eMail in the table is: ", eMail)
    await page.waitForTimeout(2000)

}
)