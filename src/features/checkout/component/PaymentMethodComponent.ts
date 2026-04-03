import { Locator } from "@playwright/test";

export class PaymentMethodComponent {
    constructor(private component: Locator){
        this.component = component;
    }
    public static selector = '#opc-payment_method';
    private selBtn = 'input[class = "button-1 payment-method-next-step-button"]';

    async clickOnContinueBtn(){
        return this.component.locator(this.selBtn).click();
    }
    
}