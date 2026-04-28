import { Locator } from "@playwright/test";

export class ConfirmOrderComponent {
    constructor(private component: Locator){
        this.component = component;
    }
    public static selector = '#opc-confirm_order';
    private selBtn = 'input[class = "button-1 confirm-order-next-step-button"]';

    async clickOnBtn(){
        return this.component.locator(this.selBtn).click();
    }
}