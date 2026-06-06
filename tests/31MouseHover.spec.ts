//31MouseHover.spec.ts

import{test,expect} from "@playwright/test"

test("Mouse Hover Demo", async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const pointme = page.locator('.dropbtn')
    await pointme.highlight()
    await pointme.hover() // to mouse hover
    await page.waitForTimeout(2000)

    const laptops = page.locator('.dropdown-content a:nth-child(2)') // child objects fetching
    await laptops.hover() // to mouse hover

    await page.waitForTimeout(2000)
} )

test("Right click demo", async({page})=>
{
    await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html');
    const rtButton = page.locator('.context-menu-one');
    await rtButton.click({button:'right'}) // this will perform right click

    await page.waitForTimeout(5000)

}
)

test("Double click action", async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const btnClick = page.locator("button[ondblclick='myFunction1()']")
    await btnClick.dblclick()
    const field2Val = page.locator('#field2')
    expect(field2Val).toHaveValue("Hello World!") // field 2 value check

    await page.waitForTimeout(3000)
})

test("Drag and Drop", async ({page}) =>
{
    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette");

    const rome=page.locator("#box6");
    const italy=page.locator("#box106");

    //Appraoch 1:  mouse hover and drag manually

    await rome.hover();
    await page.mouse.down();
    await italy.hover();
    await page.mouse.up();

    //Appraoch 2:  perform drag and drop action

    const washington=page.locator('#box3');
    const usa=page.locator('#box103');

    await washington.dragTo(usa); // this wil perform drag and drop action

    await page.waitForTimeout(5000);


    
}

)