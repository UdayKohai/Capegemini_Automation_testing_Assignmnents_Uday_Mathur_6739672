import {test} from "@playwright/test"

test.skip("test1",async()=>{
    console.log("test1");
});
test.describe.only("test2",async()=>{
    console.log("test2");
    test.fail("1",async({page})=>{
        console.log("hi");
        
    });
    test("2",({})=>{});
    test.skip("3",({})=>{});

});
test.fixme("test3",async()=>{
    console.log("test3");
});
test("test4",async()=>{
    // test.slow();
    console.log("test4");
});
test.fixme("test5",async()=>{
    console.log("test5"); 
});
test("test6",async()=>{
    console.log("test6"); 
});
