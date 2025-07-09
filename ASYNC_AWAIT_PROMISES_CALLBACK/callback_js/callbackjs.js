function sum(a,b){
    console.log(a+b);
}
function calculator(a,b, sum){
    sum(a,b);
}
calculator(a,b,sum);

function getData(dataId){
    //2s
    setTimeout(()=>{
        console.log("data",dataId)
    },3000);
    
}
