import { Locator } from "@playwright/test";

export class PaymentInformationComponent {
    constructor(private component: Locator){
        this.component = component;
    }
       
}