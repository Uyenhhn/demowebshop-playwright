import { Page } from "@playwright/test";
import HeaderComponent from "../../../shared/components/HeaderComponent";
import PageBodyComponent from "../Component/PageBodyComponent";
import { ComputerComponent } from "../../products/Component/ComputerComponent";
import { StandardComputerComponent } from "../../products/Component/StandardComputerComponent";
import { CheapComputerComponent } from "../../products/Component/CheapComputerComponent";
import { ComputerType } from "../../products/Types/ComputerType";

export default class HomePage{
    constructor(private page: Page){
        this.page = page;
    }
    headerComponent(): HeaderComponent{
        return new HeaderComponent(this.page.locator(HeaderComponent.selector));
    }
    pageBodyComponent(): PageBodyComponent{
        return new PageBodyComponent(this.page.locator(PageBodyComponent.selector));
    }
    computerComponent(computerType: string): ComputerComponent {
        if (computerType === ComputerType.standard) {
            return new StandardComputerComponent(this.page);
        } else {
            return new CheapComputerComponent();
        }
    }


}
