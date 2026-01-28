import test from "@playwright/test";
import HomePage from "../src/features/home/Pages/HomePage";

test("Test List of Product Item Component", async({page}) => {
    await page.goto("/");
    const homepage = new HomePage(page);
    const pageBodyComponent = homepage.pageBodyComponent();
    const productItemCompList = await pageBodyComponent.productItemComponentList();
    for(let productItemComp of productItemCompList){
        const productTitle = await productItemComp.productTitleLocator().textContent();
        const productPrice = await productItemComp.productPriceLocator().textContent();
        console.log(`${productTitle?.trim()}: ${productPrice}`);
        
    }

})