import test from "@playwright/test";
import { RegisterFlow } from "../src/features/auth/Flow/RegisterFlow";
import { LoginFlow } from "../src/features/auth/Flow/LoginFlow";

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
    const login = new LoginFlow(page);
    await login.LoginUser({
        email: `john${Date.now()}@mail.com`,
        password: "123456"
    })
})
