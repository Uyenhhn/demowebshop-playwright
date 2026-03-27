import { Locator } from "@playwright/test";

export class PaymentMethodComponent {
    constructor(private component: Locator){
        this.component = component;
    }

    
}