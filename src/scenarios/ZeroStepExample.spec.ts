import { test } from '@playwright/test';
import { ai } from '@zerostep/playwright';


test('zerostep example', async ({ page }) => {
    await page.goto('https://5elementslearning.dev/demosite/index.php');

    const aiArgs = { page, test };

    await ai(`Fill HP in the left search box`, aiArgs);
    await ai(`Click to search on the magnifying glass next to the search box`, aiArgs);
    await ai(`The product Hewlett Packard LaserJet 1100Xi appears in Products meeting the search criteria`, aiArgs)
    await ai(`Click on the link 'The product Hewlett Packard LaserJet 1100Xi`, aiArgs)
})