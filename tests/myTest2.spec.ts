
// different ways of tests execution
import {test,expect} from "@playwright/test"

// by default PW have test and expect methods, so we are importing from "@playwright/test"

// Syntax of writing test

/* test("title",()=> {
    // step 1
    // step 2
    // step 3
    // step 4
}) */


// fixtures - global variables - page, browser

test("Verify browser URL @sanity", async ({page})=> {

    await page.goto("https://www.google.com/") 
    let URL:string = await page.url()   // to fetch URL of the current page
    console.log("Browser URL is : ",URL )
    
    // Asertion
   await expect(page).toHaveURL(/google/) // regular expression - /Google/ - verifying the Google word exist or not. 
   // / Google / will allows before anything of Google amd / indicates any thing after the Google


})

// page.url() - get the current browser URL
// .toHaveURL(/google/) - assertion to verify google text present in the URL or not using regular expression
// to run the headded mode we have to use command - npx playwright test --headed  
// npx playwright test myTest2.spec.ts --headed - is used to execute specific test in the test folder in headed mode
// IF you want to run multile tests in the tests folder metion in below format
//   npx playwright test myTest2.spec.ts myTest.spec.ts --headed  (space is must between two test files)

// Execution based on the title of the test
// npx playwright test -g "Verify browser URL" --headed - it will execute myTest2 - -g means global. 
// it will pick all the tests having title as "Verify browser URL"

// npx playwright test - it will execute all the tests present in the tests folder

// npx playwright test --UI - it will open the playwright UI. we can see all the tests and we can select the test to run. 
// it will run headless mode

// npx playwright test myTest.spec.ts -- debug - to debug the code 

// playwright architexture uses "Websocket". 
// in Playwright connection will open only once , after executing all the commands the connection will close
// so performace will increase