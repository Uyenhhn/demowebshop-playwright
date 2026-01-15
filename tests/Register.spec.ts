import test from "@playwright/test";
import { RegisterFlow } from "../src/features/auth/Flow/RegisterFlow";

test("Register User for male", async({page}) =>{
    await page.goto("/");
    const register = new RegisterFlow(page);
    await register.registerNewUser({
    gender: "male",
    firstname: "John",
    lastname: "Doe",
    email: `john${Date.now()}@mail.com`,
    password: "123456",
    fpassword: "123456",        
    });
})
test("Register User for female", async({page}) =>{
    await page.goto("/");
    const register = new RegisterFlow(page);
    await register.registerNewUser({
    gender: "female",
    firstname: "John",
    lastname: "Doe",
    email: `john${Date.now()}@mail.com`,
    password: "123456",
    fpassword: "123456",        
    });
})

test("Register User for Firtname Required", async({page}) =>{
    await page.goto("/");
    const register = new RegisterFlow(page);
    await register.expectFistNameRequired({
    gender: "female",
    firstname: "John",
    lastname: "Doe",
    email: `john${Date.now()}@mail.com`,
    password: "123456",
    fpassword: "123456",        
    });
})

test("Register User for Lastname Required", async({page}) =>{
    await page.goto("/");
    const register = new RegisterFlow(page);
    await register.expectLastNameRequired({
    gender: "female",
    firstname: "John",
    lastname: "Doe",
    email: `john${Date.now()}@mail.com`,
    password: "123456",
    fpassword: "123456",        
    });
})

test("Register User for Email Required", async({page}) =>{
    await page.goto("/");
    const register = new RegisterFlow(page);
    await register.expectEmailRequired({
    gender: "female",
    firstname: "John",
    lastname: "Doe",
    email: `john${Date.now()}@mail.com`,
    password: "123456",
    fpassword: "123456",        
    });
})

test("Register User for Password Required", async({page}) =>{
    await page.goto("/");
    const register = new RegisterFlow(page);
    await register.expectPassRequired({
    gender: "female",
    firstname: "John",
    lastname: "Doe",
    email: `john${Date.now()}@mail.com`,
    password: "123456",
    fpassword: "123456",        
    });
})

test("Register User for ConfirmPassword Required", async({page}) =>{
    await page.goto("/");
    const register = new RegisterFlow(page);
    await register.expectCfpassRequired({
    gender: "female",
    firstname: "John",
    lastname: "Doe",
    email: `john${Date.now()}@mail.com`,
    password: "123456",
    fpassword: "123456",        
    });
})