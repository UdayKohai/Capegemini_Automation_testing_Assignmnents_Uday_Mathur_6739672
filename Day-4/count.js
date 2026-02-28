let count = document.getElementById("count");
var c = 0;
count.innerHTML = c;

let add = document.getElementById("add");
add.addEventListener("click",()=>{
    c=c+1;
    count.innerHTML = c;
})

let sub = document.getElementById("sub");
sub.addEventListener("click",()=>{
    c=c-1;
    count.innerHTML = c;
})

let reset = document.getElementById("reset");
reset.addEventListener("click",()=>{
    c=0;
    count.innerHTML = c;
})