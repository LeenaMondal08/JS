class ToyotaCar{
    constructor(){
        console.log("creating new object");
        this.name=this.name;
    }
    strat(){
        console.log("strat");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brand=brand;
    }
}
let fortunar=new ToyotaCar("leenamondal");
console.log(fortunar.strat());
console.log(fortunar.stop());
fortunar.setBrand("fortunar");

let lexus=new ToyotaCar();
lexus.setBrand("lexus");

