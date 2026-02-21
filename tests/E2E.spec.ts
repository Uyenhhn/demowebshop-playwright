import { test } from "@playwright/test";
import { BuyingComputerFlow } from "../src/features/products/Flow/BuyingComputerFlow";
import { buildYourOwnComputerData } from "../tests/test-data/buildYourOwnComputer.data";
import { buildYourOwnCheapComputerData } from "../tests/test-data/buildYourOwnCheapComputer.data";

test("Buy from Featured - Build your own computer (dropdown)", async ({ page }) => {
  await page.goto("/");
  await new BuyingComputerFlow(page, buildYourOwnComputerData).run();
});

test("Buy from Featured - Build your own cheap computer (radio)", async ({ page }) => {
  await page.goto("/");
  await new BuyingComputerFlow(page, buildYourOwnCheapComputerData).run();
});