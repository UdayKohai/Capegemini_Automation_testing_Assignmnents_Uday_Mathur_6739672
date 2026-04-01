import {test,expect,request} from '@playwright/test'

test('API testing request fixture',async({page,request})=>{
    // let apicontext = await request.newContext(); //Warnning of APIRequestContext
    let r1 = await request.post("https://petstore3.swagger.io/api/v3/pet",{
        data:{
            id:51,
            name:"dog",
            status:"available"
        }
    });

    console.log(r1);
    console.log(await r1.json());
    
})

test("Pet store add pet",async({request})=>{
    let base_url="https://petstore3.swagger.io/api/v3";
    let r1 = await request.post(`${base_url}/pet`,{
        data:{
            id:68,
            name:"Pankaj",
            status: "available"
        }
    });
    console.log(await r1.json());


});

test("Pet update",async({request})=>{
    let base_url="https://petstore3.swagger.io/api/v3";
    let r1 = await request.put(`${base_url}/pet`,{
        data:{
            id:68,
            name:"Pankaj Ram",
            status: "available"
        }
    });
    console.log(await r1.json());


});


test.only("Get pet",async({request})=>{
    let base_url="https://petstore3.swagger.io/api/v3";

    //via id
    let r1 = await request.get(`${base_url}/pet/68`);
    console.log(await r1.json());


    //via status
    let r2 = await request.get(`${base_url}/pet/findByStatus?status=available`);
    console.log(await r2.json());
    

})