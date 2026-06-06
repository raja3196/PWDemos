//30tabs.spec.ts
import{test,expect, chromium} from "@playwright/test"

test("handle Tabs or new pages", async()=>
{
    const browser = await chromium.launch();
    const context = await browser.newContext()
    const parentPage =  await context.newPage()

    await parentPage.goto("https://testautomationpractice.blogspot.com/")

    // below 2 lines of code have problem. if we put waitForEvent before the click it will wait for the page. 
    // If we put after the click no use of waitForEvent. TO avoid this we are using promise.all() to execute both statments same time 
    // and it will return page array 
    
    
    // await context.waitForEvent('page') // page have 2 status 1.pending, 2.fulfilled,3.rejected
    // await ParentPage.locator("button:has-text('New Tab')").click() // it will open new tab / new page

    const [childPage]=await Promise.all([ context.waitForEvent('page'), parentPage.locator("button:has-text('New Tab')").click()])

    // Promise.all() we are passing 2 statments as an array and both will execute same time and it will retrun array


    // Switch between tabs and fetch titile 

    //Approch 1
    const pagesInfo = context.pages()

    console.log("total no of opend pages are : ", pagesInfo.length)
    console.log(await pagesInfo[0].title()) // page 1 title fetching
    console.log(await pagesInfo[1].title()) // page 2 title fetching

    //Approch 1
    console.log("Title of Parent Page is : ",await parentPage.title())
    console.log("Title of child Page is : ",await childPage.title())

     
    await parentPage.waitForTimeout(2000)

}

)
