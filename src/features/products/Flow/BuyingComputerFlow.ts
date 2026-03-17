import test, { Page } from "@playwright/test";
import { ComputerDetailsPage } from "../Pages/ComputerDetailsPage";
import { ComputerEssentialComponent } from "../Component/ComputerEssentialComponent";
import { ComputerDataType } from "../Types/ComputerType";



export class BuyingComputerFlow {

    constructor(private page: Page, private testData: ComputerDataType){
        this.page = page;
        this.testData = testData;
    }

    async buildComputerSpecAndAddToCart(){
        await test.step('Build computer spec and add to cart',async () => {
            const computerDetailsPage: ComputerDetailsPage = new ComputerDetailsPage(this.page);
            const {processorType, ram, hdd, os, software } = this.testData;
            const computerComp: ComputerEssentialComponent = computerDetailsPage.computerComp(this.testData.computerCompClass);
            await computerComp.unselectAllOptions();
            await computerComp.selectProcessor(processorType);
            await computerComp.selectHDD(hdd);
            await computerComp.selectRam(ram);
            if (os){
                await computerComp.selectOS(os);
            }
            await computerComp.selectSoftware(software);
            await computerComp.clickOnAddToCartBtn();

        });
    }


}