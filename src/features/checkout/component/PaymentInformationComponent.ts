import { Locator } from "@playwright/test";

export class PaymentInformationComponent {
    constructor(private component: Locator){
        this.component = component;
    }
    public static selector = '#opc-payment_info';
    private selBtn = 'input[class = "button-1 payment-info-next-step-button"]';
    private selPONumber = '#PurchaseOrderNumber';

    async inputPONumber(poNumber: string){
        await this.component.locator(this.selPONumber).fill(poNumber);
    }

    async clickOnBtn(){
        return this.component.locator(this.selBtn).click();
    }
       
}