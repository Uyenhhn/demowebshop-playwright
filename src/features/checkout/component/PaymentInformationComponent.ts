import { Locator } from "@playwright/test";

export class PaymentInformationComponent {
    constructor(private component: Locator){
        this.component = component;
    }
    public static selector = '#opc-payment_info';
    private selBtn = 'input[class = "button-1 payment-info-next-step-button"]';

    async clickOnBtn(){
        return this.component.locator(this.selBtn).click();
    }
       
}