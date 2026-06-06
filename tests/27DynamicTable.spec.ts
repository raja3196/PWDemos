// // 27DynamicTable.spec.ts

import {test,Locator,expect} from "@playwright/test"

test("Verify CPU load of chrome", async({page}) =>
{
    await page.goto("https://practice.expandtesting.com/dynamic-table")

    const DynamicTbl:Locator = page.locator("table.table tbody")
    await expect(DynamicTbl).toBeVisible()

     const rows:Locator[] = await DynamicTbl.locator("tr").all()
     console.log("Length of the array is :",rows.length)
     expect(rows).toHaveLength(4)
     await page.waitForTimeout(2000)   
     // capture chrome row number
     let processValue='';
     for (const row of rows)
     {
         let processName:String = await row.locator("td").nth(0).innerText()
        //  await page.locator("table.table tr td").nth(0).innerText()
            // console.log("process Name is ",processName)
         if (processName === 'Chrome')
         {
            processValue = await row.locator('td:has-text("%")').innerText()
            console.log("Chrome process value is :",processValue)
            break;
         }
     }
          await page.waitForTimeout(2000)  
        // Getting the yellow color 
        const YellowribbanVal:string = await page.locator("#chrome-cpu").innerText()
        console.log("Yellow ribban Val :",YellowribbanVal)

        if (YellowribbanVal.includes(processValue)) //YellowribbanVal.includes - to verify exist or not
        {
            console.log("Chrome Yellow ribban Val are same", processValue)
        }
        else{
            console.log("Chrome Yellow ribban Val are not same", processValue)
        }

        // Assertion
        expect(YellowribbanVal).toContain(processValue)
        
}
)

