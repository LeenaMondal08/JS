class Person{
    constructor(){
        console.log("this is a construtor");
    }
    eat(){
        console.log("eating");
    }
}
class Engineer extends Person{
    constructor(branch){
        console.log("enter child constructor");
       super();// to invoke perent class constructor;
        this.branch=branch;
        console.log("exit child constructor");
    }
    work(){
        super.eat();
        console.log("work");
    }
}
let engoObj=new Engineer("chemical enginner");
engoObj.work();