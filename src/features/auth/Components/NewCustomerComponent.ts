import { Locator } from "@playwright/test";

export default class NewCustomerComponent{
    constructor(private component: Locator){
       this.component = component;
    }
    public static selector = '.new-wrapper.register-block';
    private registerbtnSel = '.button-1.register-button';

    async clickRegisterBtn(){
        await this.component.locator(this.registerbtnSel).click();
    }
}