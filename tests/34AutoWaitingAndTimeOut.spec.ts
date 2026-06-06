//34AutoWaitingAndTimeOut.spec.ts

import{test,expect} from "@playwright/test"

test("Auto waiting", async ({page}) =>
{   
    test.setTimeout(50000)
    await page.goto("https://demowebshop.tricentis.com/");

    //Assertions
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/", {timeout:60000});
    await expect(page.locator('text=Welcome to our store')).toBeVisible({timeout:60000});


    // Actions
    await page.locator('#small-searchterms').fill("computer")
    await page.locator('input.button-1.search-box-button').click({force:true})
    // force is used to insted of checking the object it will forcefully click on it

}

)