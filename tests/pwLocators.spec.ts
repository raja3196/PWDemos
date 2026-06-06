// pwLocators.spec.ts

// Locators are used to identify elements on the page
// DOM - Document Object Model
// DOM is an API interface provided by browser

// Locators are the central piece of Playwright's  ' auto-waiting and retry-ability. '
// In a nutshell, locators represent a way to find element(s) on the page at any moment.


// Builtin Locators

/* page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

 */
// first mandatory step for any test

import {test,expect, Locator} from "@playwright/test"

// 1. page.getByAltText()

test ("Verify PlayWright Locators @sanity", async({page})=>{

    /*
    await page.goto("https://demo.nopcommerce.com/")

    //page.getByAltText() to locate an element, usually in images, by its text alternative.
    // use this locator when you element supports alt text such as img and area element 

    const Logo:Locator = page.getByAltText("nopCommerce demo store")
    await expect(Logo).toBeVisible()


    await expect(page.getByText("Welcome to our store")).toBeVisible()        // full string
    await expect(page.getByText("our store")).toBeVisible()                    // Partial string
    await expect(page.getByText(/Welcome\s+to\s+our\s+store/i)).toBeVisible() // Regular expression
    //  \s+ - for spave between words
    // i - inidacates case insensitive (not case sensitive)


    // 3.page.getByRole

    // it includes checkbox, input box ,buttons, headings,links, lists , tables and many more
    // for role lacator chck ARIA role
    // it will specific to the interactive attributes

    await page.getByRole("link",{name:'Register'}).click()
    await expect(page.getByRole("heading",{name:'Register'})).toBeVisible()  


// 4.page.getByLabel
    await page.getByLabel("First name:").fill ("Raja")
    await page.getByLabel("Last name:").fill ("Mannem")
    await page.getByLabel("Email:").fill ("Raja@testmail.com")

    // 5. page.getByPlaceholder
        await page.getByPlaceholder("Search store").fill ("Apple Macbook pro")

    */
    //6.PageByTitle
    await page.goto("file:///D:/Pavan%20SDET%20Typescript/Day%2019/ClassDemos/ClassDemos/app.html")

    const link:Locator = await 
    page.getByTitle("Home page link")
    await expect (link).toHaveText("Home")

    //7.
    await expect(page.getByTestId("profile-name")).toHaveText("john.doe@example.com")
    await expect(page.getByTestId("profile-name")).toHaveText("John Doe")

})

