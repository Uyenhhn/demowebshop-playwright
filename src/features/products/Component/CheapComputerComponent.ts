import test, { Locator } from "@playwright/test";
import { ComputerEssentialComponent } from "./ComputerEssentialComponent";

export class CheapComputerComponent extends ComputerEssentialComponent {
    static selectorValue = 'form#product-details-form';
    constructor(component: Locator) {
        super(component)
    }
    async selectRam(type: string): Promise<string | null> {
        return await test.step(`Select RAM as  ${type}`, async () => await this.selectCompOptions(type));
    }

    async selectProcessor(type: string): Promise<string | null> {
        return await test.step(`Select Processor as  ${type}`, async () => await this.selectCompOptions(type));
    }

}