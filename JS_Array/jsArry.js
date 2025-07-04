//declaration
let arr=["leena","priyanka","saheli"];
let arr1=[];
let arr2=new Array("html","css","js");
console.log(arr);
console.log(arr1);
console.log(arr2);

//accesing Element
console.log(arr[4]);
//length
console.log(arr1.length);
//modifying array element
arr2[1]="python";
console.log(arr2);

//adding element
arr2.push("java");
arr2.unshift("c++");
console.log(arr2);

//removing element
arr.pop();
arr.shift();
console.log(arr);

arr2.splice(2,2);
console.log(arr2);
arr2.splice(1,1,"c");
console.log(arr2);

//modifying length
let array_name=[1,6,3,9,5];
console.log(array_name.length);
array_name.length=3;
console.log(array_name);
array_name.length=8;
console.log(array_name);

// concatination
console.log(arr.concat(arr1));



