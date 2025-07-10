const URL="https://catfact.ninja/facts";
let promise=fetch(URL);
console.log(promise);
let para=document.querySelector("#para");
let btn=document.querySelector("#btn");

const getFacts=async()=>{
    console.log("getting data");
    let response=await fetch(URL);
    console.log(response);
    console.log(response.status);
    let data=await response.json();
    console.log(data);
    console.log(data.data[4].fact);
    para.innerText=data.data[0].fact;
}
btn.addEventListener("click",getFacts);
