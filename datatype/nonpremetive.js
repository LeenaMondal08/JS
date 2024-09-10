// by using literal
const person={
    name:"leena",
    age:22,
    grade:"A"
};
console.log(person);
// by using constructer
const student=new Object();
student.Name="Leena";
student.dept="B.tech";
student.roll=56789;
console.log(student);

//accessing the data within a obj
console.log(person["name"]);
console.log(person.age);

//updating the object properties possible in const obj,
student.roll=67;
person["name"]="sayantika";
console.log(person);
console.log(student);
// in this case reference of the object can not be changed