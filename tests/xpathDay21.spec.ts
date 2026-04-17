

//xpathDay21.spec.ts
import {test, expect, Locator} from "@playwright/test" 

test("X path in Playwright",async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/")
    await page.waitForTimeout(2000)
     //1.Absolute x path
    // let lOGO:Locator = page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
    let lOGO:Locator = page.locator("xpath = /html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await page.waitForTimeout(2000);
    await expect(lOGO).toBeVisible();
    await page.waitForTimeout(2000);

    const imgVerify:Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']")
    await expect(imgVerify).toBeVisible()
    await page.waitForTimeout(2000) 

    // contains method
    let constProduct:Locator =   page.locator("//h2/a[contains(@href,'computer')]");
       let productCnt:Number = await constProduct.count();
    console.log("Total no of product count is : ",productCnt);
    expect (productCnt).toBeGreaterThan(0)
    console.log("First product is ",await constProduct.first().textContent())
    console.log("Last product is ",await constProduct.last().textContent())
    // index will start from 0 
    console.log("index 1 product is ",await constProduct.nth(1).textContent())

    let lstProducts:string[]=await constProduct.allTextContents();
    console.log("All Product info ", lstProducts) // it will print in array format
    
    for (let pt of lstProducts){
        console.log(" Item details are ",pt)
        // for loop to print all the items one by one in the array
    }

    
    // starts-with()

    let build:Locator = page.locator("//h2/a[starts-with(@href,'/build')]");
    let buildCnt:Number = await build.count();
    console.log("Total products starts with build is : ",buildCnt)
    // assertion
    expect(buildCnt).toBeGreaterThan(0);

    // text() function

    let regLnk:Locator =  page.locator("//a[text()='Register']")
    console.log("Verifying Registration Link : ",expect(regLnk).toBeVisible())

    // last() function
    let lastXpath: Locator = page.locator("//div[@class='column follow-us']//li[last()]")
    await expect(lastXpath).toBeVisible()
    console.log(lastXpath.textContent());

    // Position() function

        let posXpath: Locator = page.locator("//div[@class='column follow-us']//li[position() = 3]")
        await expect(posXpath).toBeVisible()
        console.log(posXpath.textContent());



});

//img[@alt='Tricentis Demo Web Shop']