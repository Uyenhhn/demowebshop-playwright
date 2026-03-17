import { Page } from "@playwright/test";
import RegisterComponent from "../Components/RegisterComponent";

export class RegisterPage{
    constructor(private page: Page){
        this.page = page;
    }
    registerComponent(): RegisterComponent{
        return new RegisterComponent(this.page.locator(RegisterComponent.selector));
    }
}