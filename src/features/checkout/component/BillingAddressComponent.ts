import { Locator } from "@playwright/test";

export class BillingAddressComponent{
    constructor(private component: Locator){
        this.component = component; 
    }
    public static selector = '#opc-billing';
    private firstNameSel = '#BillingNewAddress_FirstName';
    private lastNameSel = '#BillingNewAddress_LastName';
    private emailSel = '#BillingNewAddress_Email';
    private companySel = '#BillingNewAddress_Company';
    private countrySel = '#BillingNewAddress_CountryId';
    private stateSel = '#BillingNewAddress_StateProvinceId';
    private citySel = '#BillingNewAddress_City';
    private address1Sel = '#BillingNewAddress_Address1';
    private address2Sel = '#BillingNewAddress_Address2';
    private zipPostalCodeSel = '#BillingNewAddress_ZipPostalCode';
    private phoneNumberSel = '#BillingNewAddress_PhoneNumber';
    private faxNumberSel = '#BillingNewAddress_FaxNumber';
    private btnSel = 'input[class ="button-1 new-address-next-step-button"]';

    async inputFirstName(firstName: string){
        await this.component.locator(this.firstNameSel).fill(firstName);
    }

    async inputLastName(lastName: string){
        await this.component.locator(this.lastNameSel).fill(lastName);
    }
     
    async inputEmail(email: string){
        await this.component.locator(this.emailSel).fill(email);
    }
    async inputCompany(company: string){
        await this.component.locator(this.companySel).fill(company);
    }
    async selectCountry(country: string){
        await this.component.locator(this.countrySel).selectOption({ label: country });
    }
    async selectState(state: string){
        await this.component.locator(this.stateSel).selectOption({ label: state });
    }
    async inputCity(city: string){
        await this.component.locator(this.citySel).fill(city);
    }
    async inputAddress1(address1: string){
        await this.component.locator(this.address1Sel).fill(address1);
    }
    async inputAddress2(address2: string){
        await this.component.locator(this.address2Sel).fill(address2);
    }
    async inputZipPostalCode(zipPostalCode: string){
        await this.component.locator(this.zipPostalCodeSel).fill(zipPostalCode);
    }
    async inputPhoneNumber(phoneNumber: string){
        await this.component.locator(this.phoneNumberSel).fill(phoneNumber);
    }
    async inputFaxNumber(faxNumber: string){
        await this.component.locator(this.faxNumberSel).fill(faxNumber);
    }
    async clickOnContinueBtn(){
        await this.component.locator(this.btnSel).click();
    }
}