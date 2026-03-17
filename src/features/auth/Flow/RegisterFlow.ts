import { expect, Page } from "@playwright/test";
import HomePage from "../../home/Pages/HomePage";
import { RegisterPage } from "../Pages/RegisterPage";

type RegisterUser = {
    gender: any;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    fpassword: string;
    };


export class RegisterFlow{
    constructor(private page: Page){
        this.page = page;
    }
    async registerNewUser(user: RegisterUser){
        const linkRegister = new HomePage(this.page);
        await linkRegister.headerComponent().clickRegister();

        const registerPage = new RegisterPage(this.page)

        await registerPage.registerComponent().selectGender(user.gender);
        await registerPage.registerComponent().inputFirstName(user.firstname);
        await registerPage.registerComponent().inputLastName(user.lastname);    
        await registerPage.registerComponent().inputEmail(user.email);
        await registerPage.registerComponent().inputPassword(user.password); 
        await registerPage.registerComponent().inputConfirmPassword(user.fpassword);
        await registerPage.registerComponent().clickRegisterBtn(); 
        await linkRegister.headerComponent().clickLogoutBtn();                         
    }

    async expectFistNameRequired(user: RegisterUser){
        const linkRegister = new HomePage(this.page);
        await linkRegister.headerComponent().clickRegister();

        const register = new RegisterPage(this.page).registerComponent();
        await register.selectGender(user.gender);
        await register.inputLastName(user.lastname);
        await register.inputEmail(user.email);
        await register.inputPassword(user.password);
        await register.inputConfirmPassword(user.fpassword);
        await register.clickRegisterBtn();

        const errorFirstname =  register.textMessErrorFirstname();
        await expect(errorFirstname).toBeVisible();
        await expect(errorFirstname).toHaveText('First name is required.');

    }

    async expectLastNameRequired(user: RegisterUser){
        const linkRegister = new HomePage(this.page);
        await linkRegister.headerComponent().clickRegister();

        const register = new RegisterPage(this.page).registerComponent();
        await register.selectGender(user.gender);
        await register.inputFirstName(user.firstname);
        await register.inputEmail(user.email);
        await register.inputPassword(user.password);
        await register.inputConfirmPassword(user.fpassword);
        await register.clickRegisterBtn();

        const errorLastname =  register.textMessErrorLastname();
        await expect(errorLastname).toBeVisible();
        await expect(errorLastname).toHaveText('Last name is required.');

    }
    async expectEmailRequired(user: RegisterUser){
        const linkRegister = new HomePage(this.page);
        await linkRegister.headerComponent().clickRegister();

        const register = new RegisterPage(this.page).registerComponent();
        await register.selectGender(user.gender);
        await register.inputFirstName(user.firstname);
        await register.inputLastName(user.lastname);
        await register.inputPassword(user.password);
        await register.inputConfirmPassword(user.fpassword);
        await register.clickRegisterBtn();

        const errorEmail =  register.textMessErrorEmail();
        await expect(errorEmail).toBeVisible();
        await expect(errorEmail).toHaveText('Email is required.');

    }
    async expectPassRequired(user: RegisterUser){
        const linkRegister = new HomePage(this.page);
        await linkRegister.headerComponent().clickRegister();

        const register = new RegisterPage(this.page).registerComponent();
        await register.selectGender(user.gender);
        await register.inputFirstName(user.firstname);
        await register.inputLastName(user.lastname);
        await register.inputEmail(user.email);
        await register.inputConfirmPassword(user.fpassword);
        await register.clickRegisterBtn();

        const errorPass =  register.textMessErrorPass();
        await expect(errorPass).toBeVisible();
        await expect(errorPass).toHaveText('Password is required.');

    }
    async expectCfpassRequired(user: RegisterUser){
        const linkRegister = new HomePage(this.page);
        await linkRegister.headerComponent().clickRegister();

        const register = new RegisterPage(this.page).registerComponent();
        await register.selectGender(user.gender);
        await register.inputFirstName(user.firstname);
        await register.inputLastName(user.lastname);
        await register.inputEmail(user.email);
        await register.inputPassword(user.password);
        await register.clickRegisterBtn();

        const errorCfpass =  register.textMessErrorCfpass();
        await expect(errorCfpass).toBeVisible();
        await expect(errorCfpass).toHaveText('Password is required.');

    }
}

