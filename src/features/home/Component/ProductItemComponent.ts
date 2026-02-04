import { Locator } from "@playwright/test";

export default class ProductItemComponent {
    constructor(private component: Locator) {
        this.component = component;
    }
    public static selector = '.product-item';
    private producttitleSel = '.product-title';
    private productpriceleSel = 'span[class*="actual-price"]';

    productTitleLocator() {
        return this.component.locator(this.producttitleSel);
    }
    productPriceLocator() {
        return this.component.locator(this.productpriceleSel);
    }

    async getName(): Promise<string> {
        return (await this.productTitleLocator().textContent())?.trim() ?? "";
    }

    async getPrice(): Promise<string> {
        return (await this.productPriceLocator().textContent())?.trim() ?? "";
    }


    async open(): Promise<void> {
        await this.productTitleLocator().click();
    }

}