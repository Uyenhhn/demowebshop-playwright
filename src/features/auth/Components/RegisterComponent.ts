import { Locator } from "@playwright/test";

export default class RegisterComponent{
    constructor(private component: Locator){
        this.component = component;
    }
    public static selector = '.page.registration-page';
    private genderMaleSel = '#gender-male';
    private genderFemaleSel = '#gender-female';
    private firstNameSel = '#FirstName';
    private lastNameSel = '#LastName';
    private emailSel = '#Email';
    private passwordSel = '#Password';
    private confirmPasswordSel = '#ConfirmPassword';
    private registerBtn = '#register-button';

    private messErrorFistnameSel = 'span[data-valmsg-for="FirstName"]';
    private messErrorLastnameSel = 'span[data-valmsg-for="LastName"]';
    private messErrorEmailSel = 'span[data-valmsg-for="Email"]';
    private messErrorPassSel = 'span[data-valmsg-for="Password"]';
    private messErrorCfpassSel = 'span[for="ConfirmPassword"]';


    async selectGender(gender: "male" | "female"){
        if(gender === "male" ){
            await this.component.locator(this.genderMaleSel).check();
        } else {
            await this.component.locator(this.genderFemaleSel).check()
        }        
    }
    async inputFirstName(firstname: string){
        await this.component.locator(this.firstNameSel).fill(firstname);
    }
    async inputLastName(lastname: string){
        await this.component.locator(this.lastNameSel).fill(lastname);
    }  
    async inputEmail(email: string){
        await this.component.locator(this.emailSel).fill(email);
    } 
    async inputPassword(password: string){
        await this.component.locator(this.passwordSel).fill(password);
    }
    async inputConfirmPassword(cfpassword: string){
        await this.component.locator(this.confirmPasswordSel).fill(cfpassword);
    }
    async clickRegisterBtn(){
        await this.component.locator(this.registerBtn).click();
    }

    textMessErrorFirstname(){
        return this.component.locator(this.messErrorFistnameSel);
    }

    textMessErrorLastname(){
        return this.component.locator(this.messErrorLastnameSel);
    }
    
    textMessErrorEmail(){
        return this.component.locator(this.messErrorEmailSel);
    }

    textMessErrorPass(){
        return this.component.locator(this.messErrorPassSel);
    }

    textMessErrorCfpass(){
        return this.component.locator(this.messErrorCfpassSel);
    }
}