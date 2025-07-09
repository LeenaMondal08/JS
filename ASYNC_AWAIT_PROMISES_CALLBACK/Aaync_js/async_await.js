async function hello(){
    console.log("hello");
}
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
    },2000);
});
}
 async function getWeatherData(){
    await api();
    await api();

}

// let solve the getData(dataId) wala problem with async-awit;
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("succes");
        },5000);
    });
}
 async function getAllData(){
    await getData(1);
   await getData(2);
    await getData(3);
 }

//IIFE: immeadiate invoked function expreesion
// (async function(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
// })();