class Perent{
    hello(){
        console.log("hello")
    }
}
class Child extends Perent{

}
let obj=new Child();
console.log(obj);
console.log(obj.hello());

class Person{
    eat(){
        console.log("eating");
    }
    sleep(){
        console.log("sleeping");
    }
    work(){
        console.log("working")
    }
}
class Doctor extends Person{

    run(){
        console.log("running");
    }
    work(){
        console.log("doctor walking");
    }
}
let obj2=new Doctor();
obj2.run();
obj2.eat();
obj2.sleep();
obj2.work();
