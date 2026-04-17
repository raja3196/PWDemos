// 25hiddenBootStrap.spec.ts
import {test, expect, Locator} from "@playwright/test"

test("Verify Hidden Boot strap values", async ({page})=> 
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(2000)

    await page.locator('input[name="username"]').fill("Admin")
    await page.locator("input[name='password']").fill("admin123")
    page.locator("button[type='submit']").click()
    await page.waitForTimeout(2000)
    await page.getByText("PIM").click()
    await page.waitForTimeout(5000)

    page.locator("form i").nth(2).click()
    await page.waitForTimeout(2000)

    const options = page.locator("div[role='listbox'] span")

    const optionsCnt = await options.count()
    console.log("Total avialable options :", optionsCnt)
    await page.waitForTimeout(2000)
    console.log("5th element is : ",await options.nth(5).innerText())
    
    console.log(options.allInnerTexts()) // it will return array


    for (let i = 0; i < optionsCnt; i++)
    {
        // console.log("list of item is :",await options.nth(i).innerText())
        console.log("list of item is :",await options.nth(i).textContent())
    }

    // to click on the selective  value from the dropdown
    for (let j=0;j<optionsCnt; j++)
    {
        const text = await options.nth(j).innerText()
       if(text==='Automaton Tester')
       {
        await options.nth(j).click()
        break;
       }
    }
})