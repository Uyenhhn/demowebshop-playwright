import { Locator, Page } from "@playwright/test";
import { selector } from "../../../shared/components/SelectorDecorator";


@selector('.totals')  // selector chính của component tổng tiền trong cart
export class TotalComponent {

    static selectorValue = '.totals';
    private priceTableRowSel = '.cart-total tr';           // selector cho từng dòng trong bảng tổng tiền
    private priceTypeSel = '.cart-total-left span';  // label: Sub-Total, Shipping, Tax, Total
    private priceValueSel = '.product-price'; // giá trị tiền
    private termOfServiceCheckboxSel = '#termsofservice'; // checkbox TOS
    private checkOutBtnSel = '#checkout';                // nút checkout

    constructor(private component: Locator) {
        this.component = component;
    }

    /**
     * Lấy tất cả loại giá và giá trị trong giỏ hàng
     * Trả về object: { "Sub-Total:": 200, "Shipping:": 10, "Tax:": 5, "Total:": 215 }
     */
    
    public async priceCategories(): Promise<{ [key: string]: number }> {
        //debug
        console.log('Total component count:', await this.component.count());
        
        const priceCategories: { [key: string]: number } = {};
        const priceTableRowLocs = await this.component.locator(this.priceTableRowSel).all();
        //Debug
        console.log('Total rows found:', priceTableRowLocs.length);

        for (let tableRow of priceTableRowLocs) {
            const priceTypeText = await tableRow.locator(this.priceTypeSel).innerText();
            const priceValueText = await tableRow.locator(this.priceValueSel).innerText();

            // Convert text -> number, bỏ ký tự lạ ($, ,)
            const priceValue = Number(priceValueText.replace(/[^0-9.]/g, ""));

            priceCategories[priceTypeText] = priceValue;
        }

        return priceCategories;
    }

    public async acceptTOS() {
        await this.component.locator(this.termOfServiceCheckboxSel).click();
    }


    public async clickOnCheckOutBtn() {
        await this.component.locator(this.checkOutBtnSel).click();
    }
}