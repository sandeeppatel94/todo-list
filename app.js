let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click",()=>{ 
let list = document.createElement("li")
let delBtn = document.createElement("button");
delBtn.innerText = "delete";
delBtn.classList.add("del");
list.innerText = input.value;
list.appendChild(delBtn);
ul.appendChild(list);
input.value = "";
})

ul.addEventListener("click",(event)=>{
 if(event.target.nodeName == "BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
 }
})