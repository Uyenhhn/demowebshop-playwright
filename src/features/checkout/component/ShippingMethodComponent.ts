import { Locator } from "@playwright/test";

export class ShippingMethodComponent{
    constructor(private component: Locator){
        this.component = component;
    }
    public static selector = '#opc-shipping_method';
    private btnSel = 'input[class = "button-1 shipping-method-next-step-button"]';
    
    async clickOnContinueBtn(){
        await this.component.locator(this.btnSel).click();  

    }
}
