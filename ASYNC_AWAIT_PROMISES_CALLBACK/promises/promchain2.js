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
console.log("fetching data 1")
asyncFunc().then((res)=>{
    console.log("fetching data 2...");
    asyncFunc2().then((res)=>{})
})

//solve the getData wala problem by using callback chain

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
        },10000);
        resolve("succes get data");
    });

}
getData(1).then((res)=>{
    return getData(2).then((res)=>{
        getData(3).then((res)=>{

        })
    })
});