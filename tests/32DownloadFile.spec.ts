//32DownloadFile.spec.ts

import {test,expect} from "@playwright/test"
// import fs from 'fs';
import fs from 'fs';


test("Download file", async ({page}) =>
{
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")

    await page.locator("#inputText").fill("Hello Raja")

    await page.locator("#generateTxt").click();
    const dldLink = await page.locator("#txtDownloadLink").isVisible();

    let [download] = await Promise.all(
        [page.waitForEvent('download'),
        await page.locator("#txtDownloadLink").click()]
        )
         
    // Save file to custom path
    const downloadPath = "download/textfile.txt"
    await download.saveAs(downloadPath);

    // check if file exists
    fs.exi


}

)