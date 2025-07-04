//creation string
let str="leena";
let str2=new String("mondal");
console.log(str2);
console.log(str+str2);
console.log(typeof str);
console.log(typeof str2);

//str literals
let str3="hi leena";
let newstr=`${str3} mondal`;
console.log(newstr);

//multiple line str
let mulstr =`
hi good morning
welcome to new str `;
console.log(mulstr);

// str operation
console.log(str.length);
console.log(str.concat(str2));
console.log(str.substring(2,5));
console.log(newstr.slice(3,6));

console.log(str.toUpperCase());
console.log(str2.toLowerCase());

console.log(str3.indexOf('leena'))
let str4="sujata"
console.log(str.replace(str,str4));

let str5=" learn js ";
console.log(str5.trim());

console.log(str[2]);
console.log(newstr.charAt(3));

//string comaprison
let str6="leena";
let str7=new String("leena");
console.log(str6==str7);
console.log(str6===str7);
console.log(str6.localeCompare(str7));

console.log(str.slice());
console.log(str.slice(2));


//practice question
let fullName=prompt("enter fullname");
let userName="@"+fullName+fullName.length;
console.log(userName);