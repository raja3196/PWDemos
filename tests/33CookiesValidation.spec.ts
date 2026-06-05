//33CookiesValidation.spec.ts

import{test,expect,chromium} from "@playwright/test"

test("Cookies Validation", async()=> {

    const Browser = await chromium.launch({headless:false}); // creating browser
    const context = await Browser.newContext(); // creating context
    const page = await context.newPage(); // creating page
    // we need to add cookies before opening the URL
    // adding cookie is in array format. Below is the syntax
    context.addCookies([
        {name:'myCookies',value:'123456',url:'http://www.automationpractice.pl/index.php'}
    ] )
    console.log("Cookie added")
    await page.goto("http://www.automationpractice.pl/index.php"); // launching application URL

    //get the cookies by name
    const allTheCookiesInfo = await context.cookies(); // it will give all the cookie info 
    const cookiesInfo = allTheCookiesInfo.find((i) => i.name === 'myCookies'); // verifying the added cookie. function return the values of cookie

    console.log("Cookies info :",cookiesInfo ); // to print the return cookie info
    expect(cookiesInfo?.value).toBe('123456') // verifying the value in the cookie
    expect (cookiesInfo).toBeDefined() // to verify it is defined or not 
    await page.waitForTimeout(5000)

    // get all the cookies info
    console.log("Cookies in the page are : ",allTheCookiesInfo.length)

    expect(allTheCookiesInfo.length).toBe(1)
    expect(allTheCookiesInfo.length).toBeGreaterThan(0)

    // to read all the cookies info
    for( const cookie of allTheCookiesInfo)
    {
        console.log("Cookies key and value is :",`${cookie.name} : ${cookie.value}`)
    }


    // to clear all the cookies
    await context.clearCookies()
    //get the cookies by name
    const allCookiesAfterClear = await context.cookies(); // it will give all the cookie info 

    console.log("After clear the cookies total is :", allCookiesAfterClear.length)
    expect(allCookiesAfterClear.length).toBe(0)

    await page.waitForTimeout(5000)
} )