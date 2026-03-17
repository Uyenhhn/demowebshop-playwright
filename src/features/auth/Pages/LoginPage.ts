import { Page } from "@playwright/test";
import LoginComponent from "../Components/LoginComponent";

export class LoginPage{
    constructor(private page: Page){
        this.page = page;
    }
    loginComponent(): LoginComponent{
        return new LoginComponent(this.page.locator(LoginComponent.selector));
    }
}