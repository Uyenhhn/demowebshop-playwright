import { Locator } from "@playwright/test";

export class ShippingAddressComponent {
    constructor(private component: Locator){
        this.component = component;
    }
    public static selector = '#opc-shipping';
    private btnSel = 'input[class = "button-1 new-address-next-step-button"]';
    private checkboxSel = '#PickUpInStore'

    async clickInStorePickup(){
        await this.component.locator(this.checkboxSel).click();
    }
    
    async clickOnContinueBtn(){
        await this.component.locator(this.btnSel).click();
    }


}