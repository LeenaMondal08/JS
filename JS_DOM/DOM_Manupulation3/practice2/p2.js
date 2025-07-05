let newButton=document.createElement("button");
newButton.innerText="click me";
newButton.style.backgroundColor="red";
newButton.style.textColor="white";
let body=document.querySelector("body");
body.prepend(newButton);

let para=document.querySelector("p");
para.getAttribute("class");
para.classList.add("newClass");