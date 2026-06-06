//27PaginationTables.spec.ts

import { test,Locator,expect } from "@playwright/test";

test("Pagination tables validations", async({page})=>
{
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")


    let nxtBtnDisplay = true;

    while (nxtBtnDisplay){
        let pgTableRow:Locator[] = await page.locator("#example tbody tr").all()
        for (let row of pgTableRow)
        {
            console.log(await row.innerText())
        }

        // next button css
        // button[aria-label='Next']
        // button[aria-controls='example']:has-text("›")
        // button[aria-controls='example']:nth-child(9)

        const nextBtn:Locator = page.locator("button[aria-label='Next']");
        const isDisable = await nextBtn.getAttribute('class');
        if (isDisable?.includes('disable'))
        {
            nxtBtnDisplay = false
        }
        else {
            await nextBtn.click()
            nxtBtnDisplay = true
            await page.waitForTimeout(2000)
        }
        
    } 
      
}
)

test("Verify dropdown click and verify rows", async({page})=> // test.only - to execute this test only
{
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")
    await page.waitForTimeout(2000)

    const dropDwn:Locator = page.locator("#dt-length-0")
    await dropDwn.selectOption({label:'25'})
    await page.waitForTimeout(2000)

    //Appraoch 1
    const pgTbleRow= await page.locator("#example tbody tr").all(); // all() converts locator to array
    // await page.waitForTimeout(2000)
    console.log("Total no of rows are : ",pgTbleRow.length) // pgTbleRow.length - row count
    expect(pgTbleRow.length).toBe(25) 

    //Appraoch 2
    const pgTbleRow2= await page.locator("#example tbody tr")
    // await page.waitForTimeout(2000)
    console.log("Total no of rows are 2  : ",pgTbleRow.length)
    expect(pgTbleRow2).toHaveCount(25) // toHaveCount(25) - will work on locators only not for Array
}
)

test.only("Verifying text in a atable", async({page}) =>

    {
        await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
        await page.waitForTimeout(4000);
        const searchBox:Locator = page.locator("#dt-search-0");
        await searchBox.fill("Yuri Berry");
        await page.waitForTimeout(5000);
         const selectTblRows:Locator[] = await page.locator("#example tbody tr").all();
         
         
         if (selectTblRows.length >= 1 )
         {
            let matchfound = false
            for (let rows of selectTblRows)
         {
            console.log(" rows val:",await rows.innerText())
            let text = await rows.innerText()

            if ( text.includes("Yuri Berry")){
                matchfound = true
                console.log("Expected data found in the table")
                break;

                expect(matchfound).toBeTruthy() // verifying true or false
            }
                
            else
            {
                console.log("data not available in the table");
            }

         }

        
        }




    }
)