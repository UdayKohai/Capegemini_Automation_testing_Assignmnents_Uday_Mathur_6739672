
class amazon{
    searchBtn:string;
    checkbox:string;
    product:any;
    quantityBtn:any;
    quantityLst:any;
    addCartBtn:any;

    constructor(page){
        this.searchBtn = page.locator('//input[@id="twotabsearchtextbox"]');
        this.checkbox = page.locator('//span[text()="10 GB & Above"]');
        this.product = page.locator('//div[@data-cy="image-container"]')
        this.quantityBtn = page.locator('//span[text()="Quantity:"]');
        this.quantityLst = page.locator('//li[@class="a-dropdown-item a-declarative"]');
        this.addCartBtn = page.locator('//input[@id="add-to-cart-button"]');
    };

    async select(q){
        await this.quantityBtn.click();
    let arr = await this.quantityLst.all();

    for(let i of arr){
        let text = await i.textContent();
        if(text?.includes(q)){
            await i.click();
            break;
        }
        
    }
    }
}

export default amazon;