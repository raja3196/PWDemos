//24MultiSelectDropDown.spec.ts

import {test,expect,Locator} from "@playwright/test"
import { compose } from "node:stream"
import { text } from "node:stream/consumers"

test("Multi select dropdown", async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // 1.select option from the dropdown
    // await page.locator('#colors').selectOption(['Red','Blue','Green']) // Visible text
    //await page.locator('#colors').selectOption(['red','green','white']) // selecting by value attribute
    // await page.locator('#colors').selectOption([{label:'Red'}, {label:'Green'},{label:'White'} ])
            // selecting by Label
    // await page.locator('#colors').selectOption([{index:0}, {index:3},{index:5} ])
            // selecting by index
    await page.waitForTimeout(5000)

    // 2 check number of options in the dropdown
    const clorDropDown:Locator = page.locator('#colors>option')
    await expect(clorDropDown).toHaveCount(7)
    await page.waitForTimeout(5000)

    // 3. check an option present in the dropdown
     const multiDropDown:string[] = (await clorDropDown.allTextContents()).map(text => text.trim())
     console.log(multiDropDown)

     expect(multiDropDown).toContain("White") // verifing white exist or not


     // 4. priniting all the options from the multi select dropdown
     for (const option of multiDropDown) // for loop applying on array
     {
        console.log(option)
     }
}
)

