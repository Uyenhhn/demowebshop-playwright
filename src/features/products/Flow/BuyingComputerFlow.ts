import { Page } from "@playwright/test";
import HomePage from "../../home/Pages/HomePage";
import { ComputerComponent } from "../Component/ComputerComponent";


export class BuyingComputerFlow {

    constructor(private page: Page, private testData: any){
        this.page = page;
        this.testData = testData;
    }

    async selectRAM(){
        const homePage: HomePage = new HomePage(this.page);
        const computerComponent: ComputerComponent = homePage.computerComponent(this.testData.type);
        await computerComponent.selectRAM(this.testData.RAM);
        await computerComponent.doSthCommon();
    }


}