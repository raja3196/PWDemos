//28datePicker.spec.ts

import {test, expect, Locator, Page} from "@playwright/test"


async function datePicker(targetMonth:string, targetYear:string,targetDate:string,page:Page,targerBoolean:boolean)
{
    while(true){

        const monthVal = await page.locator(".ui-datepicker-month").textContent();
        const yearVal = await page.locator(".ui-datepicker-year").textContent()

        if (monthVal === targetMonth && yearVal === targetYear)
        {
            break;
        }
        else
        {

            if (targerBoolean)
                {
          
                    const datePickerNextBtn:Locator = page.locator(".ui-datepicker-next");
                    await datePickerNextBtn.click()
                }
            else
                {
                    const dtPrevButton:Locator = page.locator(".ui-datepicker-prev")
                    await dtPrevButton.click()
                }     

           

        }

    }
    const DatesInfo:Locator[] = await page.locator(".ui-datepicker-calendar td").all();
    expect(DatesInfo).toBeTruthy()
    for (let dtDate of DatesInfo){
        const DateValues =  await dtDate.innerText()
        if (DateValues === targetDate){
            await dtDate.click()
        }
    }
}



test("Date picker", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const datepickerInfo:Locator  = page.locator("#datepicker")

    // 1st approch
    await expect(datepickerInfo).toBeVisible()
    await datepickerInfo.fill("06/10/2025");
    await page.waitForTimeout(2000)

    // 2nd approch
    await datepickerInfo.click()
    const year = "2024"
    const month = "December"
    const date = "3"

    datePicker(month,year,date,page,false)
    await page.waitForTimeout(2000)
    const dtcontent = "12/03/2024"
    console.log("date value is : ", datepickerInfo)

    await expect(datepickerInfo).toHaveValue(dtcontent)
 

    await page.waitForTimeout(5000)
    

}
)

test.only ("bootstrap Calender", async({page}) =>
{
    await page.goto("https://www.booking.com/")
    await page.waitForTimeout(3000)
    await page.locator("//button[contains(@data-testid,'searchbox-dates-container')]").click()

    const targetMonth:string = "May"
    const targetYear:string = "2026"
    const targetDate:string = "15"
    while (true) {
            const monthverify =  await page.locator("//h3[contains(@id,'bui-calendar-month')]").nth(0).innerText()

            // console.log(monthverify)

            let currentMonth = monthverify.split(" ")[0];
            let currentYear = monthverify.split(" ")[1];

            //  console.log("current Month",currentMonth)
            // console.log("current Year",currentYear)

            if (currentMonth === targetMonth && currentYear === targetYear)
            {
                break
            } else {
                await page.locator('button[aria-label="Next month"]').click()
            }
            
            let dtDetails =  await page.locator("table.b8fcb0c66a tbody").nth(0).locator("td").all()

            let checkDate = false
            await page.waitForTimeout(3000)
            for (let dtInfo of dtDetails)
                
            {
                let dateRequired = await dtInfo.innerText()
                if(dateRequired === targetDate)
                {
                    await dtInfo.click()
                    checkDate = true
                    break
                }

            }
            // Assertion
            expect(checkDate).toBeTruthy();
    
    }

}

)