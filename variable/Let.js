console.log("let variable");
let x=56;     //global declaration
console.log(x); 
{            // block scop
let x=20; // local variable
console.log(x);
x=60; // updated
console.log(x);
//let x=56; //can not be redeclared
}  
// end of the block

//let x=67; // can not be redeclared
x=44; // global variable updated
console.log(x); 
