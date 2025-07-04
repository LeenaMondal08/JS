//for loop

let arry=[8,9,4,6];
for(let i=0;i<arry.length;i++){
    console.log(arry[i]);
}

//for of loop
for(el of arry){
    console.log(el);
}

// for each loop
let square=[];
arry.forEach(function (i){
    square.push(i*i);
});
console.log(square);

// practice question
let price=[123,780,45,56];
let newPrice=[];
console.log(price);
price.forEach(function(i){
    let off=i/10;
    newPrice.push(off);

});
console.log(newPrice);

//converting array into string
let arr=["leena","mondal"];
console.log(arr.toString());

//map function to create new array
let name=["leena","barnali","sayatika"];
let newAr=name.map((val)=>{
    return val;
});
console.log(newAr);

// filterfunction
let number=[2,7,8,4,3,6];
let even=number.filter((el)=>{
    return el%2==0;
});
console.log(even);

// reduce
let sum=number.reduce((pre,curr)=>{
    return pre+curr;

});
console.log(sum);

// practice

let num=prompt("enter a number");
let numarr=[];
for(let i=0;i<num;i++){
    numarr.push(i);
}
console.log(numarr);