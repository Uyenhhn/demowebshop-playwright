import test from "@playwright/test";
import HomePage from "../src/features/home/Pages/HomePage";
import { BuyingComputerFlow } from "../src/features/products/Flow/BuyingComputerFlow";
import { standardComputerData } from "./test-data/StandardComputerData";

for (const testData of standardComputerData){
    test(`Build own computer - ${testData.ram}`, async ({page}) => {
    await page.goto("/");
    const clickProduct = new HomePage(page);
    await clickProduct.pageBodyComponent().openFeaturedProductByName(testData.productName);
    const flow = new BuyingComputerFlow(page, testData);
    await flow.buildComputerSpecAndAddToCart();

    });
}
