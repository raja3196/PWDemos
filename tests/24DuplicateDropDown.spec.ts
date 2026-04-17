import {test,expect,Locator} from "@playwright/test"
import { text } from "node:stream/consumers"

test('Duplicate drop down valuesVerification',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const colorsValues:Locator = page.locator("#colors > option")
    const animalValues:Locator = page.locator('#animals>option')

    const animalTrim:string[] = (await animalValues.allTextContents()).map(text => text.trim())
    const colorTim:string[] = (await colorsValues.allTextContents()).map (val => val.trim())
    // console.log(animalTrim)
    // console.log(colorTim)

    // Creeating empty set. Set will not allow duplicates
    const mySet = new Set<String>(); 
    // Creeating empty array. array allows duplicate values
    const Duplicates:string[] = []; 

    for (const text of animalTrim) // verifying the each value in the array 
    {
        if (mySet.has(text))
        {
            Duplicates.push(text) // if set dont have the value then pust the value to duplicates
        }
        else 
        {
            mySet.add(text) // if not exist in my set value adding to the mySet
            
        }

    }

    console.log("Duplicates Values are",Duplicates)
    console.log("My set Values are",mySet)

    for (const colorVal of colorTim){ 
        if (mySet.has(colorVal))
        {
            Duplicates.push(colorVal)
        }
        else
        {
            mySet.add(colorVal)
        }
    }


    console.log("Duplicates Values are",Duplicates)
    console.log("My set Values are",mySet)

})