import { Page } from "@playwright/test";
import { BasePage } from "../../products/Pages/BasePage";
import { BillingAddressComponent } from "../component/BillingAddressComponent";
import { ShippingAddressComponent } from "../component/ShippingAddressComponent";

export class CheckOutPage extends BasePage{
    constructor(page: Page){
        super(page);
    }
    billingAddressComponent(): BillingAddressComponent{
        return new BillingAddressComponent(this.page.locator(BillingAddressComponent.selector));
    }
    shippingAddressComponent(): ShippingAddressComponent{
        return new ShippingAddressComponent(this.page.locator(ShippingAddressComponent.selector));
    }

}