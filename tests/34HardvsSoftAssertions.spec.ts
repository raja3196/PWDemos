// 34HardvsSoftAssertions.spec.ts

import {test,expect} from "@playwright/test"

test("Hard vs Soft Assertions", async ({page}) =>
{
    await page.goto("https://demowebshop.tricentis.com/")

    // hard assertions
    await expect(page).toHaveTitle("Demo Web Shop")
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/")

    const logo = page.locator("img[alt='Tricentis Demo Web Shop']")
    await expect(logo).toBeVisible()


    // soft assertions

    await expect.soft(page).toHaveTitle("Demo Web Shop2")
    await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/")

    const logo2 = page.locator("img[alt='Tricentis Demo Web Shop']")
    await expect(logo2).toBeVisible()

}

);