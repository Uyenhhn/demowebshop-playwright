import { Page } from "@playwright/test";
import HeaderComponent from "../../../shared/components/HeaderComponent";
import PageBodyComponent from "../Component/PageBodyComponent";

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


}
