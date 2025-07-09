let Data="secret data"

class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("website data",Data);
    }
    
}
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        Data="some new value";
        console.log(Data);
    }
}
let student1=new User("shradha","asb@gmail.com");
let student2=new User("pagal","syu@gmail.com");
let Admin1=new Admin("admin","admin@gmail.com");

