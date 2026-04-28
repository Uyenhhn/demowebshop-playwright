import { test, expect } from "@playwright/test";
import HomePage from "../src/features/home/Pages/HomePage";
import { standardComputerData } from "./test-data/StandardComputerData";

for (const testData of standardComputerData){
    test(`Test HomePage List - ${testData.ram}`, async ({page}) => {

    await page.goto("/");
    const home = new HomePage(page);
    const items = await home.pageBodyComponent().featuredProductItems();

    expect(items.length).toBeGreaterThan(0);

    for (const item of items) {
        const name = await item.getName();
        const price = await item.getPrice();
        console.log(`${name}: ${price}`);

        expect(name).not.toBe("");
        expect(price).not.toBe("");
    }
    await home.pageBodyComponent().openFeaturedProductByName(testData.productName);

    
});
}