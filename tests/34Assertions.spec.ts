//34Assertions.spec.ts

import {test,expect} from "@playwright/test"

test("Assertions Demo", async({page}) =>
{

    await page.goto("https://demowebshop.tricentis.com/");
    
    // 1.
    // Auto retrying assertion (automatically retires until it passes or time out)
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/"); // wait for correct URL

    // Auto retry: waits for the element to be visible and have the expected text
    await expect(page.locator('text=Welcome to our store')).toBeVisible()

    await expect(page.locator("div[class='product-grid home-page-product-grid'] strong")).toHaveText("Featured products");

    //div[class='product-grid home-page-product-grid'] strong - div tag - class attribute - with in the strong tab value retriving

    // 2.
    
    //non retriving assertions (executes immediatley with out delay)
    const title = await page.title();
    console.log("text verify", title)
    expect(title.includes("Demo Web Shop")).toBeTruthy() // no auto rety

    const welcomeText = await page.locator("text=Welcome to our store").textContent();
    expect(welcomeText).toContain('Welcome') // non retrying

    //3. Negating matches(Aplicable for both auto retrying and non retrying assertions)
    await expect(page.locator('text=Welcome to our store')).not.toBeVisible()
    expect(welcomeText).not.toContain('Welcome') // non retrying




    await page.waitForTimeout(50000)


}

);