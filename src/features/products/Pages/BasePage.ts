import { Page } from "@playwright/test";
import HeaderComponent from "../../../shared/components/HeaderComponent";


export class BasePage {

    private barNotiSel = '#bar-notification p';

    protected constructor(protected page: Page) {
        this.page = page;
    }

    public async getBarNotiText() {
        return await this.page.locator(this.barNotiSel).textContent();
    }

    headerComponent(): HeaderComponent {
        return new HeaderComponent(this.page.locator(HeaderComponent.selector));
    }

}