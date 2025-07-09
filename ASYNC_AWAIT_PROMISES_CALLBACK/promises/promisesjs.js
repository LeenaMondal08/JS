let promise=new Promise((resolv,reject)=>{
    console.log("i am a pomise");
    resolv("sucess");
});
let promise1=new Promise((resolv,reject)=>{
    console.log("i am a pomise");
    reject("some error");
});

function getData(dataId,getNextData){
    return new Promise((resolv,reject)=>{
        setTimeout(() => {
            console.log("data",dataId);
            resolv("success");
            if(getNextData){
                getNextData();
            }
        },5000);
    });
}
