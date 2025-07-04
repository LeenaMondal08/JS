//declaration
function add(a,b){
    return a+b;
}
let res=add(6,7);
console.log(res);
console.log(add);// return function object

//function expression
const square=function(a){
    return a*a;
}
console.log(square(7));

let mul=function(p1,p12){
    return p1*p12;
}
let value=mul(3,5);
console.log(value);

// arrow function
//basically store function defination in a variable

const str=(str1,str2)=>{
    return str1+str2;
}
let newStr=str("leeena","mondal");
console.log(newStr);
// empty parameter
let helloprint=()=>{
    return"hello";
}
console.log(helloprint());
