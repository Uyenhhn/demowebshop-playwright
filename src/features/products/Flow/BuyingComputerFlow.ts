import test, { expect, Page } from "@playwright/test";
import { ComputerDetailsPage } from "../Pages/ComputerDetailsPage";
import { ComputerEssentialComponent } from "../Component/ComputerEssentialComponent";
import { ComputerDataType } from "../Types/ComputerType";
import { ShoppingCartPage } from "../../cart/Pages/ShoppingCartPage";
import { CheckoutOptionPage } from "../../cart/Pages/CheckoutOptionPage";
import { CheckOutPage } from "../../checkout/pages/CheckOutPage";



export class BuyingComputerFlow {

    private totalPrice: number = 0;

    constructor(private page: Page, private testData: ComputerDataType) {
        this.page = page;
        this.testData = testData;
    }

    async buildComputerSpecAndAddToCart() {
        await test.step('Build computer spec and add to cart', async () => {
            const computerDetailsPage = new ComputerDetailsPage(this.page);
            const computerComp = computerDetailsPage.computerComp(this.testData.computerCompClass);

            const { processorType, ram, hdd, os, software } = this.testData;

            await computerComp.unselectAllOptions();

            // SELECT + LẤY TEXT OPTION
            const processorText = await computerComp.selectProcessor(processorType);
            const hddText = await computerComp.selectHDD(hdd);
            const ramText = await computerComp.selectRam(ram);
            const softwareText = await computerComp.selectSoftware(software);

            let osText: string | null = null;
            if (os) {
                osText = await computerComp.selectOS(os);
            }

            // TÍNH GIÁ ADDITIONAL
            const processorPrice = await this.getAdditionalPrice(processorText);
            const hddPrice = await this.getAdditionalPrice(hddText);
            const ramPrice = await this.getAdditionalPrice(ramText);
            const softwarePrice = await this.getAdditionalPrice(softwareText);
            const osPrice = await this.getAdditionalPrice(osText);

            const additionalPrice = processorPrice + hddPrice + ramPrice + softwarePrice + osPrice;

            // LẤY GIÁ GỐC
            const basePrice = await computerComp.getProductPrice();

            // GIÁ 1 ITEM
            const itemPrice = basePrice + additionalPrice;

            // SỐ LƯỢNG
            const quantity = await computerComp.getProductQuantity();

            // TOTAL (LƯU LẠI)
            this.totalPrice = itemPrice * quantity;

            console.log('Base price:', basePrice);
            console.log('Additional price:', additionalPrice);
            console.log('Total price:', this.totalPrice);

            // ADD TO CART
            await computerComp.clickOnAddToCartBtn();
        });
    }

    async getAdditionalPrice(optionText: string | null): Promise<number> {
    if (!optionText) return 0;

    const regex = /\+\d+\.\d+/;
    const match = optionText.match(regex);

    if (match) {
        return Number(match[0].replace('+', '').trim());
    }

    return 0;
    }
    async verifyShoppingCart() {
        await test.step('Verify shopping cart logic', async () => {
            const shoppingCartPage = new ShoppingCartPage(this.page);

            // Lấy tất cả row item trong giỏ hàng
            const cartItemRowComponentList = await shoppingCartPage.cartItemRowComponentList();

            // Lặp từng item, verify unitPrice * quantity = subTotal
            for (let cartItemRow of cartItemRowComponentList) {
                const unitPrice = await cartItemRow.unitPrice();
                const quantity = await cartItemRow.quantity();
                const subTotal = await cartItemRow.subTotal();

                console.log(`Item check → unitPrice: ${unitPrice}, quantity: ${quantity}, subTotal: ${subTotal}`);
                expect(unitPrice * quantity).toBe(subTotal);
            }

            // Lấy tổng tiền UI
            const totalComponent = await shoppingCartPage.totalComponent();
            const priceCategories = await totalComponent.priceCategories();

            const subTotal = priceCategories["Sub-Total:"];
            const shippingFee = priceCategories["Shipping:"];
            const tax = priceCategories["Tax:"];
            const total = priceCategories["Total:"];

            console.log(`Price categories from UI: ${JSON.stringify(priceCategories)}`);

            // Verify tổng UI
            expect(total).toBe(subTotal + shippingFee + tax);

            // So sánh với tổng giá bạn tự tính
            expect(total).toBe(this.totalPrice);
        });
    }

    async completeCheckout() {
        await test.step('Complete checkout process', async () => {
            const shoppingCartPage = new ShoppingCartPage(this.page);
            const totalComponent = await shoppingCartPage.totalComponent();

            await totalComponent.acceptTOS();
            await totalComponent.clickOnCheckOutBtn();
            
            const checkoutOptionPage = new CheckoutOptionPage(this.page);
            await checkoutOptionPage.clickOnCheckOutAsGuestBtn();

    });
    }

    async BillingAddressStep() {
        await test.step('Fill billing address and continue', async () => {
            const { firstName, 
                    lastName, 
                    email, 
                    company, 
                    country,
                    state, 
                    city, 
                    address1, 
                    address2, 
                    zipPostalCode, 
                    phoneNumber 
                } = this.testData;
            const checkOutPage = new CheckOutPage(this.page);
            const billingAddressComponent = checkOutPage.billingAddressComponent();
            await billingAddressComponent.inputFirstName(firstName);
            await billingAddressComponent.inputLastName(lastName);
            await billingAddressComponent.inputEmail(email);
            await billingAddressComponent.inputCompany(company);
            await billingAddressComponent.selectCountry(country);
            if (state) {
                await billingAddressComponent.selectState(state);
            }
            await billingAddressComponent.inputCity(city);
            await billingAddressComponent.inputAddress1(address1);
            await billingAddressComponent.inputAddress2(address2);
            await billingAddressComponent.inputZipPostalCode(zipPostalCode);
            await billingAddressComponent.inputPhoneNumber(phoneNumber);
            await billingAddressComponent.clickOnContinueBtn();
    });
    }

    async ShippingAddressStep() {
        await test.step('Fill shipping address and continue', async () => {
           const checkOutPage = new CheckOutPage(this.page);
           const shippingAddressComponent = checkOutPage.shippingAddressComponent();
           await shippingAddressComponent.clickOnContinueBtn(); 
        })}

    async ShippingMethodStep(){
        await test.step('Select shipping method and continue', async () => {
            const checkOutPage = new CheckOutPage(this.page);
            const shippingMethodComponent = checkOutPage.shippingMethodComponent();
            await shippingMethodComponent.clickOnContinueBtn();
        })}

    async PaymentMethodStep(){
        await test.step('Select payment method and continue', async () => {
            const checkOutPage = new CheckOutPage(this.page);
            const paymentMethodComponent = checkOutPage.paymentMethodComponent();
            await paymentMethodComponent.clickOnContinueBtn();
        })}

    async PaymentInformationStep(){
        await test.step('Fill payment information and continue', async () => {
            const checkOutPage = new CheckOutPage(this.page);
            const paymentInformationComponent = checkOutPage.paymentInformationComponent();
            await paymentInformationComponent.clickOnBtn();
        })}
        
    async ConfirmOrderStep(){
        await test.step('Confirm order', async () => {
            const checkOutPage = new CheckOutPage(this.page);
            const confirmOrderComponent = checkOutPage.confirmOrderComponent();
            await confirmOrderComponent.clickOnBtn();
        })}

    }
