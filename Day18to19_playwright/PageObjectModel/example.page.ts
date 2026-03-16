class Example{
    usernameTF:string;
    passwordTF:string;
    SubmitBtn:any;

    constructor(page){
        this.usernameTF = page.locator('#username');
        this.passwordTF = page.locator('#password');
        this.SubmitBtn = page.locator('#submit');

    };

    async Click(){
        await this.SubmitBtn.click();
    }

}

export default Example;