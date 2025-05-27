import { test, expect } from '@playwright/test';

test('Advanced search for Fire type in Kanto and view Charmander details', async ({ page }) => {
    await page.goto('https://sg.portal-pokemon.com/play/pokedex');

    const advancedSearchButton = page.locator('text=Show Advanced Search');
    await advancedSearchButton.click();

    const fireTypeButton = page.locator('.pokemon-advance-search__type--fire');
    await fireTypeButton.click();
    await expect(fireTypeButton).toHaveClass(/on/);

    const kantoLabel = page.locator('label[for="pokemon_region_kanto"]');
    await kantoLabel.click();
    await expect(kantoLabel).toHaveClass(/on/);

    const searchButton = page.locator('.pokemon-advance-search__buttons--search');
    await searchButton.click();

    await page.waitForTimeout(5000);

    const charmanderImage = page.locator('img[src="/play/resources/pokedex/img/pm/d0ee81f16175c97770192fb691fdda8da1f4f349.png"]');
    await expect(charmanderImage).toBeVisible();
    await charmanderImage.click();
});
