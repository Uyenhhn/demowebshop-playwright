import { Page } from "@playwright/test";
import HeaderComponent from "../../../shared/components/HeaderComponent";

export default class HomePage{
    constructor(private page: Page){
        this.page = page;
    }
    headerComponent(): HeaderComponent{
        return new HeaderComponent(this.page.locator(HeaderComponent.selector));
    }
}
