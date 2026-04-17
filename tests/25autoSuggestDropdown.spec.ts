//25autoSuggestDropdown.spec.ts

import {test, expect, Locator } from "@playwright/test";

test('Verify Dynamic dropdown', async ({page}) =>
{
    await page.goto("https://www.flipkart.com/")
    await page.waitForTimeout(5000)
        

    await page.locator("form[class='lilxh_ header-form-search'] input[placeholder='Search for Products, Brands and More']").fill("smart")
    // text enter
    await page.waitForTimeout(2000)
    // in the DOM - press ctrl+shift+p - and enter emulate a focused page
    const optionsVal:Locator = page.locator("ul>li") // capture hidden element properties
    // if we use alltextContenet() - it will return an array and it prints with spacess as well. 
    // SO we need to trim values using map
    const options = await optionsVal.count() // counting the available options
    console.log("No of hidden items are : ", options) // print the count of options
    console.log("3 row value is : ",await optionsVal.nth(3).innerText()) // fething 3 value by using nth(3)
    await page.waitForTimeout(5000)
    // to fetch all the values
    
    for (let i = 0; i<options; i++)
    {
    //    console.log(" row value is : ",await optionsVal.nth(i).innerText()) 
       console.log(" row value is : ",await optionsVal.nth(i).textContent()) 
    }
    await page.waitForTimeout(2000)
// to click or slect based on the specific value or item
    for (let j=0; j<options;j++)
    {
        const text = await optionsVal.nth(j).textContent()
        if(text === 'smartphone')
        {
            await optionsVal.nth(j).click()
            await page.waitForTimeout(9000)
        }

    }
     

    
} )

