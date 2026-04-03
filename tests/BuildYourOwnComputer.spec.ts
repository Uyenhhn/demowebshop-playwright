import test from "@playwright/test";
import HomePage from "../src/features/home/Pages/HomePage";
import { BuyingComputerFlow } from "../src/features/products/Flow/BuyingComputerFlow";
import { standardComputerData } from "./test-data/StandardComputerData";
import { describe } from "node:test";
import { cheapComputerData } from "./test-data/CheapComputerData";

test.describe("Build your own computer", () => {
  for (const testData of standardComputerData) {
    test(`Build own computer - ${testData.ram} - ${testData.os}`, async ({ page }) => {
    await page.goto("/");
    const clickProduct = new HomePage(page);
    await clickProduct.pageBodyComponent().openFeaturedProductByName(testData.productName);
    const flow = new BuyingComputerFlow(page, testData);
    await flow.buildComputerSpecAndAddToCart();
    await page.waitForTimeout(3 * 1000);

    await clickProduct.headerComponent().clickOnShoppingCartLink();
    await flow.verifyShoppingCart();
    await flow.completeCheckout();
    await flow.BillingAddressStep();
    await flow.ShippingAddressStep();
    await flow.ShippingMethodStep();
    await flow.PaymentMethodStep();
    await flow.PaymentInformationStep();
    await flow.ConfirmOrderStep();

    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(5 * 1000);
    });
  }
});

test.describe("Build your cheap computer", () => {
  for (const testData of cheapComputerData) {
    test(`Build cheap computer - ${testData.ram} - ${testData.os}`, async ({ page }) => {
    await page.goto("/");
    const clickProduct = new HomePage(page);
    await clickProduct.pageBodyComponent().openFeaturedProductByName(testData.productName);
    const flow = new BuyingComputerFlow(page, testData);
    await flow.buildComputerSpecAndAddToCart();
    await page.waitForTimeout(3 * 1000);

    await clickProduct.headerComponent().clickOnShoppingCartLink();
    await flow.verifyShoppingCart();
    await flow.completeCheckout();
    await flow.BillingAddressStep();
    await flow.ShippingAddressStep();
    await flow.ShippingMethodStep();
    await flow.PaymentMethodStep();
    await flow.PaymentInformationStep();
    await flow.ConfirmOrderStep();

    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(5 * 1000);
    });
  }
});