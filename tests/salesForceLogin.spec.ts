import {chromium,test} from "@playwright/test"
test("SalesForce Login",async({page}) =>{

    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com")
    await page.locator('#Login').click()
    await page.locator('#password').fill("TestLeaf@2025")
    await page.locator('#Login').click()
    await page.locator('[title="App Launcher"]').click()
    console.log("successfull Login")

    page.close()
})