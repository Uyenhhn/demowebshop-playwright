import { Locator } from "@playwright/test";

export default class HeaderComponent {
    constructor(private component: Locator){
    }
    public static selector = '.header';
    private registerSel = 'a[href="/register"]';
    private loginSel = 'a[href="/login"]';
    private shoppingCartSel = '#topcartlink';
    private wishlishSel = 'a[href="/wishlist"]';
    private logoutBtn = 'a[href="/logout"]';

    async clickRegister(){
        await this.component.locator(this.registerSel).click();
    }
    async clickLogin(){
        await this.component.locator(this.loginSel).click();
    }
    async clickSoppingCart(){
        await this.component.locator(this.shoppingCartSel).click();
    }
    async clickWishlist(){
        await this.component.locator(this.wishlishSel).first().click();
    }
    async clickLogoutBtn(){
        await this.component.locator(this.logoutBtn).click();
    }
}