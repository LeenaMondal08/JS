// get the attribute value
let div=document.querySelector("div");
console.log(div);
let id=div.getAttribute("id");
console.log(id);//box
let name=div.getAttribute("name");
console.log(name);//priya
let para=document.querySelector("p");
console.log(para);
console.log(para.getAttribute("class"));

// set attribute value
let head=document.querySelector("h1");
console.log(head);
console.log(head.setAttribute("clsas","heading"));

// changing style
div.style.backgroudColor="blue";
div.innerText="hello";
//div.style.visibility="hidden";

// creating new element and add it to the page
let newButton=document.createElement("button");
newButton.innerText="click me";
div.append(newButton);
 let newPara=document.createElement("p");
 newPara.innerText="good afternoon";
 para.append(newPara);


let newhead=document.createElement("h1");
newhead.innerHTML="<i>main head</i>";
document.querySelector("body").prepend(newhead);
//removing newheading

newhead.remove();

