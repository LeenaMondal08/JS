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