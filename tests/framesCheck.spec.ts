import{expect, test} from "@playwright/test"
test("Work on frames", async({page})=>
{
    await page.goto("https://leafground.com/frame.xhtml")
    const frameSrc =page.frameLocator("//iframe[@src='default.xhtml']")
    frameSrc.locator('#Click').click()

    await expect(frameSrc.locator('#Click')).toHaveText("Hurray! You Clicked Me.")
    page.frames().length

    console.log("Frames in the page: "+page.frames().length)

    const outerFrame = page.frameLocator("//iframe[@src='page.xhtml']")
    const innerFrame = outerFrame.frameLocator("//iframe[@src='framebutton.xhtml']")
    innerFrame.locator('#Click').click()

    await expect(innerFrame.locator('#Click')).toHaveText("Hurray! You Clicked Me.")


})