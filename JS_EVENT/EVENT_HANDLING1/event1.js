//acessing button 
let btn=document.querySelector("#bt");
// event operation
btn.onclick=()=>{
    console.log("this the button");
    let a=67;
    a=a+1;
    console.log(a);
}
/*
btn.onclick=()=>{
    console.log("1st even by overwritten by this 2nd event");
    
}
    */

let para=document.querySelector("p");
para.onmouseover=(ev)=>{
    console.log("hovring paragraph");
    console.log(ev);
    console.log(ev.type);
    console.log(ev.target);
 console.log(ev.clientx);
 console.log(ev.clienty);

}
 // print the event object;