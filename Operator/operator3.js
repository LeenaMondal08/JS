//ternary
let marks=30;
let res=(marks<30)?"fail":"pass";
console.log(res);

//nested ternary
let a=12,b=54,c=0;
let smallest = (a < b) ? ((a < c) ? a : c) : ((b < c) ? b : c);
console.log(smallest);

let str="12";
let str2="5";
let str1=str+"geeks";
console.log(str1);
console.log(str+str2);

//delete operator
let person={
    name:"leena",
    age:23,
    city:"kolkata"
}
console.log(person);
delete person['age'];
console.log(person);

//in-operator
let language=["html","css","js"];
console.log(1 in language);//index
console.log(3 in language);//index
console.log("css" in language);
console.log("python" in language);

let data={
    name:"barnali",
    age:7
}
console.log("age" in data);
console.log("class" in data);
