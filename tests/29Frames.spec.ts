//29Frames.spec.ts

import {test,expect,Locator} from "@playwright/test"

test("Frames demo", async ({page}) => 
{
    await page.goto("https://ui.vision/demo/webtest/frames/")

    const frames = page.frames();

    console.log("No of frames in a page is :", frames.length)

    const frame = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})

    if (frame) // frame should be true then only operations will perform
    {
        // 1 . approch
        await frame.locator("[name='mytext1']").fill("Hello")
        // 2 . approch
        // await frame.fill("[name='mytext1']","Hello")
    } else 
    {
        console.log("Frame not exist")
    }
        // 2 . approch

        // page.frameLocator("[src='frame_2.html']").locator("[name='mytext2']").fill ("Raja second Frame")
                    // OR

        let inputData = page.frameLocator("[src='frame_2.html']").locator("[name='mytext2']")
        await inputData.fill("Raja second Frame")
    await page.waitForTimeout(5000)


    // page.frame - only allows only the URL or name of the frame
    //frame.locator - allows any kind of a locator
}

)

test.only ("child or inner frames handling", async({page}) =>
{
    await page.goto("https://ui.vision/demo/webtest/frames/")

    console.log("no of frames on a page",page.frames())

    const frame3 =  page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'}) // it will return Frame
    await page.waitForTimeout(2000)
    if (frame3){

        await frame3.locator("[name='mytext3']").fill("Frame 3 welcome")
        const childFrames = frame3.childFrames() // it will return in the form of an array
        console.log("childFrames are : ",childFrames.length)
        const radio = childFrames[0].getByLabel("I am a human")
        await radio.check()
        expect(radio).toBeChecked() //assertion to know radio button selected or not
        const chkBox = await childFrames[0].getByLabel("Form Autofilling").click()
        await page.waitForTimeout(2000)
        const inputBox5 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_5.html'})

        if (inputBox5) {

                inputBox5?.locator("[name='mytext5']").fill("Frame5 Raja")
                await inputBox5?.locator("[href='https://a9t9.com']").click()

            } else
            {
                console.log("Frame 5 not visible")
            }


    }
    else
    {
        console.log("frame 3 not exist")
    }
    await page.waitForTimeout(5000)
}

)