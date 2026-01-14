import { Page } from "@playwright/test";
import HomePage from "../../home/Pages/HomePage";
import { LoginPage } from "../Pages/LoginPage";

type LoginrUser = {
    email: any;
    password: string;
    };    


export class LoginFlow{
    constructor(private page: Page){
        this.page = page;
    }

    async LoginUser(user: LoginrUser) {
        const linkLogin = new HomePage(this.page);
        await linkLogin.headerComponent().clickLogin();

        const loginPage = new LoginPage(this.page);
        await loginPage.loginComponent().inputEmail(user.email);
        await loginPage.loginComponent().inputPassword(user.password);
        await loginPage.loginComponent().checkboxRemeberme();
        await loginPage.loginComponent().clickLoginBtn()

    }



}