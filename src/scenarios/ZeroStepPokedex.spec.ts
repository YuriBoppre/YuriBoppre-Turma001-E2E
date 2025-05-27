import { test } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('ZeroStep - Buscar Pokemon na Pokédex', async ({ page }) => {
    await page.goto('https://sg.portal-pokemon.com/play/pokedex');

    const aiArgs = { page, test };

    await ai(`Click on the search field in the Pokédex`, aiArgs);
    await ai(`In the field labeled "Search by name or number", type "Pikachu"`, aiArgs);
    await ai(`Press Enter or click the search icon to start searching`, aiArgs);
    await ai(`Wait for the Pokémon Pikachu to appear in the search results`, aiArgs);
    await ai(`Click on the first Pikachu card to view its details`, aiArgs);
});
