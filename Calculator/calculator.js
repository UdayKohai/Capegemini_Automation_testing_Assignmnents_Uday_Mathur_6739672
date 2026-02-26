let val1 = document.getElementById('val1');
let val2 = document.getElementById('val2');
let op = document.getElementById('output')

let add = document.getElementById('add');
let sub = document.getElementById('sub');
let mul = document.getElementById('mul');
let div = document.getElementById('div');

// let equal = document.getElementById('equal');


let eq =0;
add.addEventListener('click',()=>{
    eq = Number(val1.value) + Number(val2.value);
    // val1.value = '';
    // val2.value = '';
    op.innerHTML = "Answer"+eq;
})
sub.addEventListener('click',()=>{
    eq = Number(val1.value)- Number(val2.value);
    op.innerHTML = "Answer :"+eq;

})
mul.addEventListener('click',()=>{
    eq = Number(val1.value) * Number(val2.value);
    op.innerHTML = "Answer : " +eq;
})
div.addEventListener('click',()=>{
    if(Number(val2.value)==0){
        op.innerHTML = "Not Divisiable by 0"
    }
    else{
    eq = Number(val1.value)/ Number(val2.value);
    op.innerHTML = "Answer"+eq;
    }
})

// equal.addEventListener('click',()=>{
//     op.innerHTML = eq;

// })