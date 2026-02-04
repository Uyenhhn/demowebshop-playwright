import { Locator, Page } from "@playwright/test";

export abstract class ComputerComponent {

     constructor(protected component: Locator) {
        this.component = component;
     }

    public static selector = ".product-details-page";
    protected attributesRootSel = ".attributes";
    protected addToCartBtnSel = 'button[id^="add-to-cart-button-"]';

    protected attributesRoot(): Locator {
        return this.component.locator(this.attributesRootSel);
    }

    protected attributeBlock(name: string): Locator {
        return this.attributesRoot()
            .locator("dt", { hasText: `${name}:` })
            .locator("xpath=following-sibling::dd[1]");
    }

    // ===== Helper dùng chung cho mọi product =====

    protected async selectDropdown(attributeName: string, label: string): Promise<void> {
        const block = this.attributeBlock(attributeName);
        await block.locator("select").selectOption({ label });
    }

    protected async selectRadio(attributeName: string, optionLabel: string): Promise<void> {
        const block = this.attributeBlock(attributeName);
        await block.locator("label", { hasText: optionLabel }).click();
    }

    protected async toggleCheckbox(attributeName: string, optionLabel: string, checked = true): Promise<void> {
        const block = this.attributeBlock(attributeName);

        const label = block.locator("label", { hasText: optionLabel });
        const inputId = await label.getAttribute("for");

        if (!inputId) {
            throw new Error(`Missing 'for' on label: ${attributeName} - ${optionLabel}`);
        }

        const input = block.locator(`#${inputId}`);
        const isChecked = await input.isChecked();

        if (isChecked !== checked) {
            await label.click();
        }
    }

    // ===== Common options (GIỐNG NHAU -> dùng chung) =====

    async selectHDD(optionLabel: string): Promise<void> {
        await this.selectRadio("HDD", optionLabel);
    }

    async selectOS(optionLabel: string): Promise<void> {
        await this.selectRadio("OS", optionLabel);
    }

    async selectSoftware(optionLabel: string, checked = true): Promise<void> {
        await this.toggleCheckbox("Software", optionLabel, checked);
    }

    async addToCart(): Promise<void> {
        await this.component.locator(this.addToCartBtnSel).click();
    }

    // ===== Different options (KHÁC NHAU -> tách riêng ở class con) =====
    abstract selectProcessor(valueLabel: string): Promise<void>;
    abstract selectRAM(valueLabel: string): Promise<void>;

}