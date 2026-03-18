import { Page } from "@playwright/test";
import { BasePage } from "../../products/Pages/BasePage";

export class CheckoutOptionPage extends BasePage {

    private checkOutAsGuestSel = 'input[value="Checkout as Guest"]';

    constructor(page: Page) {
        super(page);
    }

    async clickOnCheckOutAsGuestBtn() {
        await this.page.locator(this.checkOutAsGuestSel).click();
    }
}