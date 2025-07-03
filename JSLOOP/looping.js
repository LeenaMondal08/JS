let i;
for(i=1;i<5;i++){
    console.log(i);
    if(i==2){
        break;
    }
}
    console.log("leena");

let num=20;
while(num>15){
    console.log(num);
    num--;
}
let test=1;
do{
    console.log(test);
    test++;
}
while(test<5);

//practice" print even number between 1-20"
console.log("even number");
let num2;
for(num2=1;num2<=20;num2++){
    if(num2%2!==0){
        continue;
    }
    console.log(num2);
}
