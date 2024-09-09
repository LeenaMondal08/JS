// number
let age=24,price=100.50,num=Infinity,num2="leena"/2;
console.log(age,price,num,num2);
console.log(typeof num2);

//string
let name="leena", str="i am leena";
let phrase=`can embed ${str}`;
console.log(phrase);
console.log(typeof name);

//boolean
let isupper=true;
let n=(7==7);
console.log(n);
console.log(typeof isupper);

//null
let x=null;
console.log(x); //op->undefined
console.log(typeof x);// 'object'

//symboll
let sym=Symbol(123);
console.log(sym);
let symb1=Symbol("geeks");
let symb2=Symbol("geeks");
console.log(symb1===symb2);//false

//BigInt
let b=BigInt("34567");
console.log(b);

// undefined
let y;
console.log(typeof y);


