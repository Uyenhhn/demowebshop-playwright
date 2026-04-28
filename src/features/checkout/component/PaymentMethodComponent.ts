import { Locator } from "@playwright/test";

export class PaymentMethodComponent {
    constructor(private component: Locator) {
        this.component = component;
    }
    public static selector = '#opc-payment_method';
    private selBtn = 'input[class = "button-1 payment-method-next-step-button"]';
    private selMoneyOrder = '#paymentmethod_1';
    private selCreditCard = '#paymentmethod_2';
    private selPurchaseOrder = '#paymentmethod_3';

    async selectMoneyOrder() {
        await this.component.locator(this.selMoneyOrder).click();
    }
    async selectCreditCard() {
        await this.component.locator(this.selCreditCard).click();
    }
    async selectPurchaseOrder() {
        await this.component.locator(this.selPurchaseOrder).click();
    }
    async clickOnContinueBtn() {
        return this.component.locator(this.selBtn).click();
    }

}