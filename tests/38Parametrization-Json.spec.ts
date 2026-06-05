// 38Parametrization-Json.spec.ts

import { test, expect } from "@playwright/test"
import { parse } from "csv-parse"
import fs from 'fs'

const JsonPath = "testData/data.json" // need to change the / for windows
const testDataJsonPath = JSON.parse(fs.readFileSync(JsonPath, "utf-8"))

// const validate = "valid"

test.describe("Verify Login with JSON test data", async () => {

    for (const { email, password, validity } of testDataJsonPath) {

        test(`login verify with JSON : ${email} and ${password} `, async ({ page }) => {

            await page.goto("https://demowebshop.tricentis.com/login");
            await page.locator(".email").fill(email);
            await page.locator("#Password").fill(password)
            await page.locator("input[value='Log in']").click()
            await page.waitForTimeout(5000)
            if (validity === "valid") {
                // Assertion for Logout lnk verify for Valid credentials
                const logout = page.locator(".ico-logout")
                await expect(logout).toBeVisible({ timeout: 5000 })
            }
            else {
                // Assertion for error msg to verify for Invalid credentials
                const errorMsg = page.locator(".validation-summary-errors")
                await expect(errorMsg).toBeVisible({ timeout: 5000 })
                // Assertion for page have same URL or not
                await expect(page).toHaveURL("https://demowebshop.tricentis.com/login")
            }

        });

    };

});