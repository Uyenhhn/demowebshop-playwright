import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../products/Pages/BasePage";
import { CartItemRowComponent } from "../Component/CartItemRowComponent";
import { TotalComponent } from "../Component/TotalComponent";

export class ShoppingCartPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }


    //Lấy tất cả các item row trong giỏ hàng
    public async cartItemRowComponentList(): Promise<CartItemRowComponent[]> {
        // Lấy tất cả element matching selector từ CartItemRowComponent
        const cartItemLocators: Locator[] = await this.page.locator(CartItemRowComponent.selectorValue).all();

        // Map thành mảng CartItemRowComponent
        return cartItemLocators.map(loc => new CartItemRowComponent(loc));
    }

    // Lấy component tổng tiền
    public totalComponent(): TotalComponent {
        const totalLoc = this.page.locator(TotalComponent.selectorValue);
        return new TotalComponent(totalLoc);
    }
}