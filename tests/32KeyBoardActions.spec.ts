//32KeyBoardActions.spec.ts

// Key board methods

// 1.insertText
// 2.down
// 3.up
// 4.press
// 5.type

// await page.keyBoard

import {test,expect} from "@playwright/test"

test("KeyBoard actions", async ({page}) =>
{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.waitForTimeout(2000)

    const input1 = page.locator('#input1')

    //1) fous on input1
    await input1.focus() // it will focus on the input 1
    // OR
    //await input1.click() // both will do same operations

    //2) provide the text input1
    await page.keyboard.insertText("Welcome")
    await page.waitForTimeout(2000)

    //3) Ctrl + A - select the text from input1
    await page.keyboard.down('Control')
    await page.keyboard.press('A')
    await page.keyboard.up('Control')
    await page.waitForTimeout(2000)

    //4) Ctrl +C - copy the text from input 1
    await page.keyboard.down('Control')
    await page.keyboard.press('C')
    await page.keyboard.up('Control')
    await page.waitForTimeout(2000)
    //5 Press TAB - 2 times
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')

    //6) Ctrl + V  - past the text in input2
    await page.keyboard.down('Control')
    await page.keyboard.press('V')
    await page.keyboard.up('Control')
    await page.waitForTimeout(2000)
    //7) Press TAB - 2 times
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(2000)

    //8) Ctrl+V - past the text in input 3
    await page.keyboard.down('Control');
    await page.keyboard.press('V');
    await page.keyboard.up('Control');

    await page.waitForTimeout(5000);
}
)

test.only("KeyBoard actions - Simple way", async ({page}) =>
{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.waitForTimeout(2000)

    const input1 = page.locator('#input1')

    //1) fous on input1
    await input1.focus() // it will focus on the input 1
    // OR
    //await input1.click() // both will do same operations

    //2) provide the text input1
    await page.keyboard.insertText("Welcome")
    
    //3) Ctrl + A - select the text from input1
    await page.keyboard.press('Control+A')
    
    //4) Ctrl +C - copy the text from input 1
    await page.keyboard.press('Control+C')
    //5 Press TAB - 2 times
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')

    //6) Ctrl + V  - past the text in input2
    await page.keyboard.press('Control+V')
    //7) Press TAB - 2 times
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
   

    //8) Ctrl+V - past the text in input 3
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(5000);


}

)