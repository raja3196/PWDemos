// 23PWActions.spec.ts


merging Git demo commit
import {test , Locator, expect} from "@playwright/test"
//merging Git demo commit

// Input box/ test box / text input
test('PW Input Actions', async({page})=>
{

    await page.goto("https://testautomationpractice.blogspot.com/")
    // navigate to the web page

    let nameTextBox:Locator = page.locator("#name");
    await expect(nameTextBox).toBeVisible()
    // TO find element is visible or not
    await expect (nameTextBox).toBeEnabled()
    // TO find element is enabled or not
    let lentOfNameTest:any = nameTextBox.getAttribute("maxlength");
    let lentOfName:string | null = await nameTextBox.getAttribute("maxlength");
    // to get the attribute value

    expect(lentOfName).toBe('15')
    // Comparing the attribute value

    await nameTextBox.fill("Raja Mannem")
    // send value to the input box

    const enteredValue:string = await nameTextBox.inputValue()
    console.log("Entered input box value is :",enteredValue)
    expect(enteredValue).toBe("Raja Mannem")
    await page.waitForTimeout(2000)


});

// Radio button - check , uncheck, tobeChecked
test('PW Radio button Actions', async({page})=>
    // .only assertion is used to execute only this test case
{

    await page.goto("https://testautomationpractice.blogspot.com/")
    // navigate to the web page

    const maleRadiobtn:Locator = page.locator("#male")
    await expect(maleRadiobtn).toBeVisible();
    // TO find element is visible or not
    await expect(maleRadiobtn).toBeEnabled()
    // TO find element is enabled or not
    expect(await maleRadiobtn.isChecked()).toBe(false)
    // Verify radio button checked or not
    maleRadiobtn.check()
    // to check radio button
    await page.waitForTimeout(2000)
    expect(await maleRadiobtn.isChecked()).toBe(true)
    // Verify radio button checked or not after the check
    // assertion
    await expect(maleRadiobtn).toBeChecked(); // Preferable
    // Verify radio button checked or not after the check
});

// Check box - check , uncheck, tobeChecked
test.only('PW Check box Actions', async({page})=>
    // .only assertion is used to execute only this test case
{

    await page.goto("https://testautomationpractice.blogspot.com/")
    // navigate to the web page


    // Select specific check box(sunday) using getByLabel method
     const sundayChkBox:Locator = page.getByLabel("Sunday")
    await sundayChkBox.check()
    await expect(sundayChkBox).toBeChecked();
    await page.waitForTimeout(2000) 

    // Select all check boxes and assert each is checked 
    const days:string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    // creating an Array
    const checkBoxes:Locator[] = days.map(index => page.getByLabel(index))
    // using map method fetching all the array values and make checkBox as an Array
   expect(checkBoxes.length).toBe(7)
    // verifying the checkbox array count
    await page.waitForTimeout(2000) 
    //Select all the check boxes and assert each is checked

    for(const checkbox of checkBoxes) // FOR of method applying on array
    {
        await checkbox.check()
        await expect(checkbox).toBeChecked()
    }

    await page.waitForTimeout(2000)
    await sundayChkBox.uncheck()
    await page.waitForTimeout(2000) 


    // to select last 3 check boxes and assert (verifying)
    for (const checkbox of checkBoxes.slice(-3))
        //checkBoxes.slice(-3) to get last 3 array values
        //checkBoxes.slice(3) to get first 3 array values
    {
        await checkbox.uncheck()
        await expect(checkbox).not.toBeChecked()

        // .not.toBeChecked() - is used to check uncheck or not
        await page.waitForTimeout(2000)
    }
    await page.waitForTimeout(2000)


    // Toggle check box - if checked then uncheck and assert. If uncheked then chek and assert

    for (const veryChk of checkBoxes )
    {
        if (await veryChk.isChecked()) // return true or false
        {
              
            await veryChk.uncheck()
            await expect(veryChk).not.toBeChecked()
            
            
            
        }
        else {  
            
            await veryChk.check()
            await expect(veryChk).toBeChecked()
            
        }
        
    }
    await page.waitForTimeout(2000) 
  
    
    // Randomly select check box - select check box of [1,3,6]


    // const days:string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    // // creating an Array
    // const checkBoxes:Locator[] = days.map(index => page.getByLabel(index))
    // // using map method fetching all the array values and make checkBox as an Array

    
    const indes:number[] = [1,3,6]
    for (let i of indes)
    {
        checkBoxes[i].check();
        await expect(checkBoxes[i]).toBeChecked();
    }

    await page.waitForTimeout(2000)



    // Select the check box based on the lable
    const weekName="Sunday"
    for (const i of days)
    {
        if (i===weekName)
        {
            page.getByLabel(i).check()
            await page.waitForTimeout(5000)
            await expect(page.getByLabel(i)).toBeChecked()
            
        }
    }
    await page.waitForTimeout(2000)
});