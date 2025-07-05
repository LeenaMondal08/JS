let head=document.querySelector("h3");
console.dir(head);
head.innerText=head.innerText+" welcome to apna college";

// accesing div
let divs=document.querySelectorAll(".box");
console.dir(divs); // return a node list like array
//divs[0].innerText="new unique value 3"
//divs[1].innerText="new unique value 2"
//divs[2].innerText="new unique value 3"
let ind=1;
for(div of divs){
    div.innerText=`new unique value ${ind}`
    ind++;
}

