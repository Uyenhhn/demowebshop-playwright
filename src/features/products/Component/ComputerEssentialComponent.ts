import { Locator } from "@playwright/test";
import { BaseItemDetailsComponent } from "./BaseItemDetailsComponent";

export abstract class ComputerEssentialComponent extends BaseItemDetailsComponent {

    constructor(component: Locator) {
        super(component);
    }

    public abstract selectRam(type: string): Promise<string | null>;
    public abstract selectProcessor(type: string): Promise<string | null>;

    async selectHDD(type: string): Promise<string | null> {
        return await this.selectCompOptions(type);
    }

    async selectOS(type: string): Promise<string | null> {
        return await this.selectCompOptions(type);
    }

    async selectSoftware(type: string): Promise<string | null> {
        return await this.selectCompOptions(type);
    }

    protected async selectCompOptions(type: string): Promise<string | null> {
        const selectorValue = `//label[contains(text(), "${type}")]`;
        const optionLoc = this.component.locator(selectorValue).first();
        await optionLoc.click();
        return await optionLoc.textContent();
    }

}