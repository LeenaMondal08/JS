function product(a,b){
    return a*b;
}
console.log(product(6,7));

//multiplae return statement
function language(){
    let first="html";
    let second="css";
    let third="js";

    return{
        first, second, third
    };

}
let {first,second,third}=language();
console.log(first);
console.log(second);
console.log(third);