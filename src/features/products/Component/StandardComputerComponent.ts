import { Page } from "@playwright/test";
import { ComputerComponent } from "./ComputerComponent";

export class StandardComputerComponent implements ComputerComponent {

    constructor(private page: Page){
        this.page = page;
    }

    private ramSel: string = "";

    async selectRAM(value: string) {
        await this.page.locator(this.ramSel);
        console.log('Standard ComputerComponent | Select RAM');
    }
    
}