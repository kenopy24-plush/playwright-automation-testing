export class loginPage{

    constructor(page){

        this.emailField = page.locator('[data-test="email"]');
        this.passwordField = page.locator('[data-test="password"]');
        this.loginbutton = page.locator('[data-test="login-submit"]');

    }

    async emailANDpassword(email,password){
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
    }

    async loginbuttonClick(){
        await this.loginbutton.click();
    }

}