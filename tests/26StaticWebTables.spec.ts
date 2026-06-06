// 26StaticWebTables.spec.ts

import{test,Locator, expect} from "@playwright/test"

test("static Web Tables",  async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(1000)
    const StaticTable:Locator =  page.locator("table[name='BookTable']>tbody");
    await page.waitForTimeout(2000)
    expect(StaticTable).toBeVisible()

    // 1. to get table row info

    //  let rowInfo:Locator = page.locator("table[name='BookTable']>tbody tr")

     let rowInfo:Locator = StaticTable.locator("tr")
     await expect(rowInfo).toHaveCount(7)
      let rowCnt = await rowInfo.count()
      console.log("Row COunt is :",rowCnt);
      expect(rowCnt).toBe(7);

      // 2. to get columns/Header info

      let columnInfo:Locator = rowInfo.locator("th")
      await page.waitForTimeout(2000)
      await expect(columnInfo).toHaveCount(4)
      const columnCnt:number = await columnInfo.count()
     console.log("Column Count is :",columnCnt)
     expect(columnCnt).toBe(4)

     // to get 2nd row table data

     const secondRowCell:Locator = rowInfo.nth(2).locator("td")
     let secondRowText:String[] = await secondRowCell.allInnerTexts()
     console.log("Second Row Cells is :",secondRowText)

     await expect(secondRowCell).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ])

     // for loop to fetch the data
     console.log("2nd row of data")
     for (let i of secondRowText)
     {
        console.log("array data is :",i)
     }

     // TO read all the data present in the table

     const allRowData:Locator[] = await rowInfo.all()

     for (let text of allRowData.slice(1)) // slice(1) - to avoid the first row header values
     {
        const rowData:string[] = await text.locator("td").allInnerTexts();
       console.log(rowData.join('\t')); // join('\t') - to get tab space after each data
     
     }

     // Print book name written by Mukesh
     
     const MukeshBooks:String[]=[] // creating blank array
     for (let bookinfo of allRowData) 
     {
        const cells = await bookinfo.locator("td").allInnerTexts()
        const Author = cells[1]
        const bookName = cells[0]
        if (Author === 'Mukesh')
        {
            console.log(`${Author} \t ${bookName}`) 
            MukeshBooks.push(bookName) // push used to push values to the array
        }

     }
     expect(MukeshBooks).toHaveLength(2)

     //calculate total price in the table
     let totalPrice:number = 0
   //   for (let row of allRowData.slice(1))
   //   {
   //      const cells:Locator = await row.locator('td').allInnerTexts();
   //      const price = cells[3]
   //      totalPrice = totalPrice + parseInt(price) // parseInt to convert text data type to number
       
   //   }
   //      console.log("Total price is : " , totalPrice)

   //      expect(totalPrice).toBe(7100); // assertion
})