/*function hello(){
    console.log("hello");
}
setTimeout(hello,6000);*/
//see how async works
console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("hello")
},10000);
console.log("three");
console.log("four");