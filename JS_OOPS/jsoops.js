const student={
    fullName:"leena mondal",
    marks:78.98,
    printMark:function () {
        console.log("marks= ",this.marks);
    },

};
console.log(student.fullName);
console.log(student.marks);
console.log(student.printMark());

//prototype concept

const employee={
    calTax(){
        console.log("tax rate is 10%");
    },
    calTax2:function(){
        console.log("tax rate is 20%");
    },
    total(){
        console.log("property method");
    },
};
console.log(employee.calTax2())

const newEmp={
    salary:2000,
    total(){
        console.log("object method");
    },
}
console.log(newEmp.salary);

// now i access the tax method in 2nd object
//we need to set a propery 
newEmp.__proto__=employee;
console.log(newEmp);
console.log(newEmp.calTax2());
console.log(newEmp.total());

