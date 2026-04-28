import { Locator, selectors } from "@playwright/test";
import { selector } from "../../../shared/components/SelectorDecorator";

@selector('.cart-item-row')
export class CartItemRowComponent {

    static selectorValue = '.cart-item-row';
    private unitPriceSel = '.product-unit-price';
    private quantityInputSel = '.qty-input';
    private subTotalSel = '.product-subtotal';

    constructor(private component: Locator) {
        this.component = component;
    }

    public async unitPrice(): Promise<number> {
        const unitPriceText = await this.component.locator(this.unitPriceSel).textContent();
        return Number(unitPriceText);
    }

    public async quantity(): Promise<number> {
        const quantityText = await this.component.locator(this.quantityInputSel).getAttribute('value');
        return Number(quantityText);
    }

    public async subTotal(): Promise<number> {
        const subTotalText = await this.component.locator(this.subTotalSel).textContent();
        return Number(subTotalText);
    }

}