import { count } from "node:console";

export class registrationPage {

    constructor(page) {
        this.page = page;

        this.firstname = page.locator('[data-test="first-name"]');
        this.lastname = page.locator('[data-test="last-name"]');
        this.dob = page.locator('[data-test="dob"]');
        this.street = page.locator('[data-test="street"]');
        this.postalCode = page.locator('[data-test="postal_code"]');
        this.housenumber = page.locator('[data-test="house_number"]');
        this.city = page.locator('[data-test="city"]');
        this.state = page.locator('[data-test="state"]');
        this.country = page.locator('[data-test="country"]');
        this.phone = page.locator('[data-test="phone"]');
        this.email = page.locator('[data-test="email"]');
        this.password = page.locator('[data-test="password"]');
        this.registerBtn = page.locator('[data-test="register-submit"]');
    }

    async fillPersonalInfo(firstName, lastName, DOB){
        await this.firstname.fill(firstName);
        await this.lastname.fill(lastName);
        await this.dob.fill(DOB);
    }

    async address(Street, Postal, House_Number, City, State, Country){

        await this.street.fill(Street);
        await this.postalCode.fill(Postal);
        await this.housenumber.fill(House_Number);
        await this.city.fill(City);
        await this.state.fill(State);
        await this.country.click();
        await this.country.selectOption(Country);

    }

  

    async contactANDpassword(Phone, Email, Password){

        await this.phone.fill(Phone);
        await this.email.fill(Email);
        await this.password.fill(Password);

    }

    async RegisterButton(){
        await this.registerBtn.click();
    }

}