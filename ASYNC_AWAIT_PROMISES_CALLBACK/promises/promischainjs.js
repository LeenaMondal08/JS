function asyncFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data 1");
            resolve("sucess to d1");
        },4000);
    });
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data 2");
            resolve("sucess to data2");
        },4000);
    });
}
console.log("fetchinf data one....");
let p2=asyncFunc();
p2.then((res)=>{
    console.log(res);
})
console.log("fetching data 2...");
console.log("fetchinf data two");
let p3=asyncFunc2();
p2.then((res)=>{
    console.log(res);
})