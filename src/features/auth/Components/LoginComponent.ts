import { Locator } from "@playwright/test";

export default class LoginComponent{
    constructor(private component: Locator){
        this.component = component;
    }
    public static selector = '.returning-wrapper';
    private emailSel = '#Email';
    private passwordSel = '#Password';
    private remebermeSel = '#RememberMe';
    private forgotpassSel = 'a[href="/passwordrecovery"]';
    private loginbtnSel = '.button-1.login-button';

    async inputEmail(email: string){
        await this.component.locator(this.emailSel).fill(email);
    }
    async inputPassword(password: string){
        await this.component.locator(this.passwordSel).fill(password);
    }
    async checkboxRemeberme(){
        await this.component.locator(this.remebermeSel).click();
    }
    async linkForgotPass(){
        await this.component.locator(this.forgotpassSel).click();
    }
    async clickLoginBtn(){
        await this.component.locator(this.loginbtnSel).click();
    }
}