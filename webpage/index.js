let cart = document.getElementById("Cart")

let a1 = document.getElementById("a1");
a1.addEventListener("click",()=>{
    let img = document.createElement("img");
    img.setAttribute("src","./images/accessories/adapm.jpg")
    if(cart){
        cart.appendChild(img);
    }
})

