//24PWDropDown.spec.ts
import {test, expect,Locator} from "@playwright/test"

test("Single slect dropDown", async ({page})=>{

     await page.goto("https://testautomationpractice.blogspot.com/")
     await page.waitForTimeout(2000)

     // 1.select option from the dropdown
     //await page.locator('#country').selectOption('India');  //visible text
    //  await page.locator('#country').selectOption({value:"uk"}); //By using Value attribute
    //  await page.locator('#country').selectOption({label:'India'}); //By using label
    await page.locator('#country').selectOption({index:3}); //By using index
    await page.waitForTimeout(5000)

    // 2. check number of options in a dropdown

    const dropdownVal:Locator = page.locator('#country>option')
    // ('#country>option') CSS locator naviagte to list of items in a dropdown
    await expect(dropdownVal).toHaveCount(10)

    await page.waitForTimeout(2000)


    //3. check an option present in the drop down or not

      const ValuesOfDropDown:string[] = await dropdownVal.allTextContents()
      console.log(ValuesOfDropDown) // OP - get with spacess
     // Applying map in an array to fetch all the values from an array and trim

      const listValues:string[] = (await dropdownVal.allTextContents()).map(iArrayVal => iArrayVal.trim())
      console.log(listValues)

      expect(listValues).toContain('India')
        await page.waitForTimeout(1000)

    //4. priniting options present in the dropdown
    for (const iVariable of listValues)
    {
        console.log(iVariable)
    }

})