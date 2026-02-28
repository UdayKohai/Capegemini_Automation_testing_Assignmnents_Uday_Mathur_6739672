let newlist = document.getElementById("addtxt");
let addbtn = document.getElementById("add");
let form = document.getElementById("content");

addbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if (newlist.value != '') {

        let label = document.createElement("label");
        let checkbox = document.createElement("input");
        let span = document.createElement("span");

        checkbox.type = "checkbox";

        span.textContent = " " + newlist.value;

        label.appendChild(checkbox);
        label.appendChild(span);

        form.appendChild(label);

        newlist.value = "";
    }
});