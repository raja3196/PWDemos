//30browserContext.spec.ts
import{test,expect, chromium,firefox} from "@playwright/test"

// we can open different URLS in different pages using same browser at same time

test("Browser Context demo", async() => 
{
    // const browser =  await chromium.launch() // create Browser
    const browser =  await firefox.launch() // create Browser - we can create chrome, firefox or webkit (safari)
    const context =  await browser.newContext() // create context
    const page1 = await context.newPage()
    const page2 = await context.newPage()

    await page1.goto("https://playwright.dev/");
    // to verify the title of the page
    await expect(page1).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright") 
    console.log(await page1.title()) // to get the title of the page
    await page2.goto("https://www.selenium.dev/selenium-ide/")
    console.log(await page2.title()) // to get the title of the page

    // to verify the title of the page
    await expect(page2).toHaveTitle("Selenium IDE · Open source record and playback test automation for the web")

    await page1.waitForTimeout(2000);

}

)

