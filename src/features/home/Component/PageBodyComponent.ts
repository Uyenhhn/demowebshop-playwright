import { Locator } from "@playwright/test";
import ProductItemComponent from "./ProductItemComponent";

export default class PageBodyComponent{
    constructor(private component: Locator){
       this.component = component;
    }
    public static selector = '.page-body';

    async productItemComponentList(): Promise<ProductItemComponent[]> {
        const productCompList =  await this.component.locator(ProductItemComponent.selector).all();
        return productCompList.map(locator => new ProductItemComponent(locator));
    }
}