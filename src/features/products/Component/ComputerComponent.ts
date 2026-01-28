import { Page } from "@playwright/test";

export abstract class ComputerComponent {

    private commonSel: string = "sth";

    constructor(protected page: Page) {
        this.page = page;
    }

    abstract selectRAM(value: string){
        console.log();
        
    };

    async doSthCommon() {
        await this.page.locator(this.commonSel);
    }
}