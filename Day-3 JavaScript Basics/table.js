let table = document.createElement('table');
table.cellPadding = "50px";
table.border ="2px solid black";
// table.cellSpacing= "0px";---> to remove double border
table.style.borderCollapse = "collapse";
// let tr1 =document.createElement("tr");
// let td1 = document.createElement('td');
// let td2 = document.createElement('td');
// let td3 = document.createElement('td');
// let td4 = document.createElement('td');
// let td5 = document.createElement('td');
// tr1.append(td1);
// tr1.append(td2);
// tr1.append(td3);
// tr1.append(td4);
// tr1.append(td5);

for(let i =1;i<=5;i++){
    let tr =document.createElement("tr");
    for(let j=1;j<=5;j++){
        let td = document.createElement('td');
        tr.append(td);
    }
    table.append(tr);
}


document.body.append(table);

function hel(){
    console.log("Hello");
    
}
console.log(typeof hel);

console.log(hel instanceof Function);
