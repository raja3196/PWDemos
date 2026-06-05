//29Dialogues.sepc.ts

import{expect, test, Locator} from "@playwright/test"

test ("Simple Dialog ", async({page})=>

    {
        await page.goto("https://testautomationpractice.blogspot.com/")

        // Register Dialogue handle
        page.on('dialog', (dialog) => 
        {
            console.log(" Dialog type is: ",dialog.type())
            expect(dialog.type()).toContain('alert')
            console.log("Text present in the Dialog is :", dialog.message())
            expect(dialog.message()).toContain("I am an alert box!");
            dialog.accept()
        })
        
        
        await page.locator("#alertBtn").click()
        await page.waitForTimeout(3000)

    }
)

test ("Confirmation alert", async({page})=>

    {
        await page.goto("https://testautomationpractice.blogspot.com/")

        // Register Dialogue handle
        page.on('dialog', (dialog) => 
        {
            console.log(" Dialog type is: ",dialog.type())
            expect(dialog.type()).toContain('confirm')
            console.log("Text present in the Dialog is :", dialog.message())
            expect(dialog.message()).toContain("Press a button!");
            // dialog.accept() // dialoge accepts -click ok button
            dialog.dismiss() // click cancel button
        })
        
        
        await page.locator("#confirmBtn").click()
        let txtinfo = await page.locator("#demo").innerText()
        console.log("after click info is:",txtinfo)
        // expect(page.locator("#demo")).toHaveText("You pressed OK!")
        expect(page.locator("#demo")).toHaveText("You pressed Cancel!")

        await page.waitForTimeout(3000)

    }
)

test.only ("Prompt alert", async({page})=>

    {
        await page.goto("https://testautomationpractice.blogspot.com/")

        // Register Dialogue handle
        page.on('dialog', (dialog) => 
        {
            console.log(" Dialog type is: ",dialog.type())
            expect(dialog.type()).toContain('prompt')
            console.log("Text present in the Dialog is :", dialog.message())
            expect(dialog.message()).toContain("Please enter your name:");
            expect(dialog.defaultValue()).toContain("Harry Potter")
            
            dialog.accept('Raja') // enter user defined data to the dialoge input box and dialoge accepts -click ok button
            //dialog.dismiss() // click cancel button
        })
        
        
        await page.locator("#promptBtn").click()
        let txtinfo = await page.locator("#demo").innerText()
        console.log("after click info is:",txtinfo)
        expect(page.locator("#demo")).toHaveText("Hello Raja! How are you today?")

        await page.waitForTimeout(3000)

    }
)