let marks=85;
let branch;
switch(true){
    case marks>=90:
        branch="cse";
        break;
    case marks>=80:
        branch="me";
        break;
    case marks>=70:
        branch="chem";
        break;
    case marks>=60:
        branch="civil";
        break;
    default:
        branch="hons";

}
console.log(branch);