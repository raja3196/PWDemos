
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

test("Verify browser title", async ({page})=> {

    await page.goto("https://www.google.com/")
    let titlePage:string = await page.title()
    console.log("Browser title is : ",titlePage )
    
    // Asertion
   await expect(page).toHaveTitle("Google")

})

// page.goto - is used to launch browser 
//page.title() - is used to get the title of the browser
// expect(page).toHaveTitle("Google") - to verify the title of the page
// synchronus - execution is in the sequesnce. we have 4 tests , once test 1 is completed next test 2 will start ,
// once test2 completed then test 3 will start and once test 4 completed then only test 4 will execute. this is called synchronus nature. 
// JS, TS and Python will follow this 

//Asynchronus nature - if the test1 is inprogress or with out completion of the test1, 
// test 2 will start and same as test 3 will start with out completion of the test 2 paralally

// few steps in the TS or JS will follow Asynchronus

// synchronus - all steps execute one by one
// Asynchronus - all steps execute paralally. it wont wait for the previous step to complete

// By defult playwright will execute in headless mode, 
// to run the headded mode we have to use command - npx playwright test --headed  