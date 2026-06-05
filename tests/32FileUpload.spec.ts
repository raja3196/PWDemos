//32FileUpload.spec.ts

import {test,expect} from "@playwright/test"

test("Upload single file", async ({page}) =>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('#singleFileInput').setInputFiles('tests/uploads/tosca.txt')
    await page.locator("button:has-text('Upload Single File')").click()
    const msg = await page.locator('#singleFileStatus').textContent()
    console.log("Upload done ...")
    expect(msg).toContain("tosca.txt")

    await page.waitForTimeout(3000)

}

)

test.only("Upload Multiple files", async ({page}) =>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('#multipleFilesInput').setInputFiles(['tests/uploads/playwright.pdf','tests/uploads/tosca.txt'])
    await page.locator('button:has-text("Upload Multiple Files")').click()

    const msg = await page.locator('#multipleFilesStatus').textContent()
    console.log(msg)
    console.log("Upload done ...")
    expect(msg).toContain("tosca.txt")
    expect(msg).toContain("playwright.pdf")

    await page.waitForTimeout(3000)

}

)