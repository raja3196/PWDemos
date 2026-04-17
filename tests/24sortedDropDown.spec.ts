// 24sortedDropDown.spec.ts

import {test, expect,Locator} from "@playwright/test"

test("Verifying sorted or not in the  dropDown values", async ({page})=>{

     await page.goto("https://testautomationpractice.blogspot.com/")
     await page.waitForTimeout(2000)
    const animalsDropDown:Locator = page.locator('#animals>option');
    const animalsValues:string[] = (await animalsDropDown.allTextContents()).map(text => text.trim());
    // console.log("Original list of animals values",animalsValues)
        // Sorting the values in a dropdown
    const sortedList:string[] = animalsValues.sort() //.sort is for sorting the list of values in dropdown
    // console.log("After sorting animals lOV",sortedList)


    const clrsDropDown:Locator = page.locator('#colors > option');
    const clrsValues:string[] = (await clrsDropDown.allTextContents()).map(text => text.trim());
    console.log("Original list of color values",[...clrsValues])
        // Sorting the values in a dropdown
    const sortedclrsList:string[] = [...clrsValues.sort()] //.sort is for sorting the list of values in dropdown
    // [...clrsValues] ... are used to do not chage the original value becoz of sort()
    console.log("After sorting colors lOV",sortedclrsList)

    
    expect(sortedclrsList).toEqual(sortedList); 
    await page.waitForTimeout(1000)
})