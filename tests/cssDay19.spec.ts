// cssDay19.spec.ts
/* 
2 types of CSS locator we Have
1. absolute css locator
2. relative css locator

tag with id         tag#id  or //#id
tag with class      tag.class or .class
tag with  any other attribute  tag[attribute=value]  or [attribute = value]
tag with class and attribute   tag.class[attribute=value] or .class[attribute=value]


SYntax :
page.locator(CSS/Xpath)
 
*/

import {test,expect,locator} from "@playwright/test"

test ("Verify CSS Locators", async ({page})=>{
   await page.goto("https://demowebshop.tricentis.com/")

    // const searchStore:locator = page.locator('input#small-searchterms');
    // await searchStore.fill ("Computers")

    // await expect(page.locator("input#small-searchterms")).toBeVisible() // tag name accepted (input)

    // await expect(page.locator("#small-searchterms")).toBeVisible() // with out tag name also accepted

    // await page.locator('input#small-searchterms').fill ("computer")
    await page.waitForTimeout(5000); // to wait for execution for 5 sec


    //tag.class
    await page.locator("input.search-box-text").fill ("Hello")
    await page.waitForTimeout(2000)
    await page.locator(".search-box-text").fill ("Raja")

    await page.waitForTimeout(5000);

    //Tag[attribute:value]
    await page.locator("input[name=q]").fill ("Mannem")
    await page.waitForTimeout(2000)
    await page.locator("[name=q]").fill ("Hi")
    await page.waitForTimeout(2000)

      //Tag.class[attribute:value]

      await page.locator("input.search-box-text[name='q']").fill ("Helo locator")
      await page.waitForTimeout(2000)
      await page.locator(".search-box-text[name='q']").fill ("Helo locator")
})
