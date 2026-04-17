import {test,expect, Locator} from "@playwright/test"

test ("Xpath axes demo", async({page})=>{

    await page.goto("https://www.w3schools.com/html/html_tables.asp")


    // 1. Self axis - select <td> element that contains 'Germany'
    const GemanyCell:Locator =  page.locator("(//td[text()='Germany']/self::td)")
    await expect(GemanyCell).toHaveText('Germany');
                    // .toHaveText() is used to find the text present in a webpage or not

    // 2. Parent axis - Get parent <tr> of the 'Germany' cell
    const Germanycell:Locator = page.locator("(//td[text()='Germany']/parent::tr)");
    await expect(Germanycell).toContainText('Maria Anders');
     console.log(await Germanycell.textContent())

    // 3. child axis - get all <td> children of the second <tr>  in the table
    const secondRowCell:Locator = page.locator("//table[@id='customers']//tr[2]/child::td")
    await expect(secondRowCell).toHaveCount(3); // verifying how many child items in a row
    
    // 4. Ancestor axis - get ancestor < table> of germany cell
    // //td[text()='Germany']/ancestor::* - * represents all the ancestors count
                         // //td[text()='Germany']/ancestor::table - specific to the table ancestor
    const tableInfo:Locator = page.locator("//td[text()='Germany']/ancestor::table")
    await expect(tableInfo).toHaveAttribute('id','customers');

    //5. decendent axis - get all <td> elements values in a table
    const tblDescentant:Locator = page.locator("//table[@id='customers']/descendant::td")
    await expect(tblDescentant).toHaveCount(18);

    //6. following axis - Get the <td> that comes after the Germany
    const follwingEle:Locator = page.locator("//td[normalize-space()='Germany']/following::td[1]")
    await expect(follwingEle).toHaveText("Centro comercial Moctezuma")

    //6. following-sibling -  axis - Get the <td> that comes after the Maria Andres
    const siblingEle:Locator =  page.locator("//td[normalize-space()='Maria Anders']/following-sibling::td")
    await expect(siblingEle).toHaveCount(1)

    // 7.preceding axis - Get <td> just before the Germany
    const precedingEle:Locator = page.locator("//td[text()='Germany']/preceding::td[1]")
    await expect(precedingEle).toHaveText("Maria Anders")

    // 8.preceding axis - Get <td> to the left of Germany
   const  leftSiblings:Locator = page.locator("//td[text()='Germany']/preceding-sibling::td")
   await expect(leftSiblings).toHaveCount(2);
   await expect(leftSiblings.nth(0)).toHaveText("Alfreds Futterkiste")
   await expect(leftSiblings.nth(1)).toHaveText("Maria Anders")
     

})