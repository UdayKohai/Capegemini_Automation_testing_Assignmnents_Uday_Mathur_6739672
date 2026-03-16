class ss{
    loginBtn:any;
    createAccBtn:any;
    firstNameInp:any;
    lNameInp:any;
    emailInp:any;
    phoneInp:any;
    passwordInp:any;
    confPasswordInp:any;
    genderMale:any;
    genderFemale:any;
    genderOther:any;
    tncCbox:any;
    registerBtn:any;
    signInLnk:any;

    LoginBtn:any;
    LoginEmail:any;
    LoginPass:any;

    searchBox:any;
    dataLst:any;
    searchBtn:any;


    constructor(page){
        this.loginBtn = page.getByRole("button",{name:"Login"});
        this.createAccBtn = page.locator('//span[text()="Create Account"]');
        this.firstNameInp = page.locator('//input[@id="First Name"]');
        this.lNameInp = page.locator('//input[@id="Last Name"]');
        this.phoneInp = page.locator('//input[@id="Phone Number"]');
        this.emailInp = page.locator('//input[@id="Email Address"]');
        this.passwordInp = page.locator('//input[@id="Password"]');
        this.confPasswordInp = page.locator('//input[@id="Confirm Password"]');
        this.genderMale = page.locator('//span[contains(text(),"Male")]');
        this.genderFemale = page.locator('//span[contains(text(),"Female")]');
        this.genderOther = page.locator('//span[contains(text(),"Other")]');
        this.tncCbox = page.locator('//input[@id="Terms and Conditions"]');
        this.registerBtn = page.getByRole("button",{name:'Register'});
        this.LoginEmail = page.locator('//input[@id="Email"]');
        this.LoginPass = page.locator('//input[@id="Password"]');
        this.LoginBtn = page.locator('//span[contains(text(),"Login")]');
        this.searchBox = page.locator('//input[@id="search"]');
        this.dataLst = page.locator('//datalist[@id="browsers"]');
        this.searchBtn = page.locator('//*[name() ="svg"][@id="searchBtn"]');

    }

    async search(s){
        await this.searchBox.fill(s);
        // await this.dataLst.selectOption(s);
        await this.searchBtn.click();
    }
}

export default ss;