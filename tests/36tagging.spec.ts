// 36tagging.spec.ts

import {test,expect} from "@playwright/test"
import fs from 'fs';

import {parse} from 'csv-parse'


test("Verify title", {tag:'@sanity'}, async({page})=>
{
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle('Google')
});

test('verify store info',{tag:'@regression'}, async({page})=>
{
    await page.goto("https://www.google.com/")
    await page.getByRole('link', { name: 'Store' }).click()
    const msg = await page.locator("h2[class='dmlTCe cvWf9e H2oDqb']").textContent()
    console.log("Stores contains text as: ",msg)
    expect(msg).toContain("Popular on the Google Store.")
});

test("Verify Recomandations",{tag:['@sanity','@regression']}, async ({page})=>
{
    await page.goto("https://www.google.com/")
    await page.getByRole('link', { name: 'Store' }).click()
    await expect(page).toHaveTitle("Google Store for Google Made Devices & Accessories")
});

// npx playwright test tests/36tagging.spec.ts --headed --grep "@sanity"

//npx playwright test tests/36tagging.spec.ts --headed --grep "@regression"

// npx playwright test tests/36tagging.spec.ts --headed --grep "(?=.*@sanity)(?=.*@regression)" // ?=.* is the regular expression 
// using and option and it will execute that which test have both sanity and regression

//npx playwright test tests/36tagging.spec.ts --headed --grep "@sanity|@regression" 3 tests will run

//npx playwright test tests/36tagging.spec.ts --headed --grep "@sanity" --grep-invert "@regression" - 1 test executes. only sanity not regression