// 26comparingMethods.spec.ts

import {test,expect,Locator} from "@playwright/test"

test("comparing Methods", async ({page}) => 
  {
    await page.goto('https://demowebshop.tricentis.com/')

    // to fetch all the product info
    await page.waitForTimeout(2000)
    const options:Locator = page.locator('.product-title')
    // '.product-title' class object
    // here Locator is an interface. it represents group of elements
    // innerText() vs textContent() - used to fetch single element to fetch values
    await page.waitForTimeout(2000)
    //console.log("innerText method",await options.nth(1).innerText()) 
    // it will not allow any spaces on both sides and no page breaks allowed

    //console.log("textContent method",await options.nth(1).textContent())
    // it will allow spaces on both sides and page breaks allowed. hidden items details also will display

    const optionsCnt:number = await options.count()

    /* for (let i=0; i<optionsCnt; i++)
    {
        console.log("innertext values fetching : ",await options.nth(i).innerText())
    }

    for (let j=0; j<optionsCnt; j++)
    {
        const ProductInfo:string | null = await options.nth(j).textContent()
        //textContent() return type is string | null
        console.log("textContent values fetching : ",ProductInfo?.trim())
        // when we apply trim on ProductInfo?.trim() - ? indicates optional parameter
    } */

    // allInnerTexts() vs allTextContents() - used to fetch multiple values from mutliple elements with out for loop
    // allInnerTexts() vs allTextContents() - both will return array
    
    const productValues:string[] = await options.allInnerTexts()
    //console.log("allInnerTexts Values are :", productValues)

    const productTextContentValues:string[] = await options.allTextContents()
    // out put is with out space and no page breaks
    /* OP - allInnerTexts Values are : [
        '$25 Virtual Gift Card',
        '14.1-inch Laptop',
        'Build your own cheap computer',
        'Build your own computer',
        'Build your own expensive computer',
        'Simple Computer'
        ] */

    //console.log("all Text Contents Values are", productTextContentValues)
    // out put is with space and page breaks
   /*  OP - all Text Contents Values are [
        '\n            $25 Virtual Gift Card\n        ',
        '\n            14.1-inch Laptop\n        ',
        '\n            Build your own cheap computer\n        ',
        '\n            Build your own computer\n        ',
        '\n            Build your own expensive computer\n        ',
        '\n            Simple Computer\n        '
        ] */

        // console.log("After Trimming",productTextContentValues.map(text => text.trim()))
        // out put is with out space and no page breaks
       /*  OP - After Trimming [                                                                                                                                                                
            '$25 Virtual Gift Card',
            '14.1-inch Laptop',
            'Build your own cheap computer',
            'Build your own computer',
            'Build your own expensive computer',
            'Simple Computer'
            ] */

        

        // all() converts locator type to array type of Locator[]

        // to change the locator type to an Array
        const productsArray:Locator[] = await options.all()
        console.log(productsArray)
        // it will return OP as locators
        // op - [
        //     locator('.product-title').first(),
        //     locator('.product-title').nth(1),
        //     locator('.product-title').nth(2),
        //     locator('.product-title').nth(3),
        //     locator('.product-title').nth(4),
        //     locator('.product-title').nth(5)
        //     ]

        // to fetch single value based on the index
        //console.log(await productsArray[1].innerText())


        // for of loop
        for (let indexof of productsArray)
        {
            console.log("For of loop fetching values",await indexof.innerText())
        }
        // OP - For of loop fetching values $25 Virtual Gift Card
        //     For of loop fetching values 14.1-inch Laptop
        //     For of loop fetching values Build your own cheap computer
        //     For of loop fetching values Build your own computer
        //     For of loop fetching values Build your own expensive computer
        //     For of loop fetching values Simple Computer


        // FOR IN LOOP

        for (let i in productsArray)
        {
            console.log(await productsArray[i].innerText())
        }
        // op - $25 Virtual Gift Card
        //     14.1-inch Laptop
        //     Build your own cheap computer
        //     Build your own computer
        //     Build your own expensive computer
        //     Simple Computer   

    await page.waitForTimeout(2000)


} )