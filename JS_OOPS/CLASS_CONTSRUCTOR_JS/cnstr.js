class Toyota{
    constructor(brand){
        console.log("new cons");
        this.brand=brand
    }
}
let fortunar=new Toyota("fortunar");
console.log(fortunar);
console.log(fortunar.brand);
let lexus=new Toyota();
lexus.brand="lexus";
console.log(lexus);