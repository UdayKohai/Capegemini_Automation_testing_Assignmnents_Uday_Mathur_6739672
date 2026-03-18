import {test} from '@playwright/test'


test.beforeAll("test-before-all",async()=>{
    console.log("Before-all");
    
})

test.beforeEach("test-before-each",async()=>{
    console.log("Before-each");
    
})

test("test1", async()=>{
    console.log("test1");
    
})

test("test2", async()=>{
    console.log("test2");
    
})

test.afterAll("test-after-all",async()=>{
    console.log("After-all");
    
})

test.afterEach("test-after-each",async()=>{
    console.log("After-each");
    
})