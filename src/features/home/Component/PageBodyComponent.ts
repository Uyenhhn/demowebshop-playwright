import { Locator } from "@playwright/test";
import ProductItemComponent from "./ProductItemComponent";

export default class PageBodyComponent {
    constructor(private component: Locator) {
        this.component = component;
    }
    public static selector = '.page-body';

    private featuredBlockSel = ".product-grid.home-page-product-grid";

    async featuredProductItems(): Promise<ProductItemComponent[]> {
        const featured = this.component.locator(this.featuredBlockSel);
        const locators = await featured.locator(ProductItemComponent.selector).all();
        return locators.map(l => new ProductItemComponent(l));
    }

    async openFeaturedProductByName(name: string): Promise<void> {
        const featured = this.component.locator(this.featuredBlockSel);
        await featured.locator(".product-title a", { hasText: name }).click();
    }

}