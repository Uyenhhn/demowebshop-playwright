import { Page } from "@playwright/test";
import { BasePage } from "../../products/Pages/BasePage";
import { BillingAddressComponent } from "../component/BillingAddressComponent";
import { ShippingAddressComponent } from "../component/ShippingAddressComponent";
import { PaymentInformationComponent } from "../component/PaymentInformationComponent";
import { ShippingMethodComponent } from "../component/ShippingMethodComponent";
import { PaymentMethodComponent } from "../component/PaymentMethodComponent";
import { ConfirmOrderComponent } from "../component/ConfirmOrderComponent";

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
    shippingMethodComponent(): ShippingMethodComponent{
        return new ShippingMethodComponent(this.page.locator(ShippingMethodComponent.selector));
    }
    paymentMethodComponent(): PaymentMethodComponent{
        return new PaymentMethodComponent(this.page.locator(PaymentMethodComponent.selector));
    }
    paymentInformationComponent(): PaymentInformationComponent{
        return new PaymentInformationComponent(this.page.locator(PaymentInformationComponent.selector));
    }
    confirmOrderComponent(): ConfirmOrderComponent{
        return new ConfirmOrderComponent(this.page.locator(ConfirmOrderComponent.selector));
    }

}