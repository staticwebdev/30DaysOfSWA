import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('h3');
  const elements = await page.$$("h3");
  var hasText = false
  await Promise.all(elements.map(async (e)=>{
    const text = await e.innerText();
    if(text== '#30DaysOfSWA'){
        hasText = true;
        console.log("found it")
    }
  }))
  console.log("done");
  await expect(hasText).toEqual(true);
})