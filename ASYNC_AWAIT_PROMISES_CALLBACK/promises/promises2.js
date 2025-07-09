const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("1 am a student");
       //resolve("succes")
       reject("error msg");
    });
};
let promise3=getPromise();
Promise.then((res)=>{
    console.log("promiss fulfilled");
});
Promise.catch(()=>{
    console.log("rejected");
});
