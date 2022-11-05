/* // VAR - LET - CONST

//the variable can change
let age = 40;
console.log(age);

age = 42;
console.log(age);

//cannot change, must be defined first
const name = "Zeynep";
console.log(name);

let str= "";

for (let i= 0; i<10; i++){
    str = str.concat(i)
    console.log(str)
}
  
const myArr = [1, 2, 3];
console.log(myArr);
myArr.pop();
console.log(myArr);

const student = {
    name: "Zeynep",
    age: "21"
}

console.log(student);

//cannot modify the object
Object.freeze(student);

student.name = "Rana";
console.log(student);  

//VAR --> global scope / functional scope
var x= 1;
console.log(x);

if (x ===1){
    var x = 10;
    console.log(x);
}

console.log(x);

//LET --> block scope 
let y= 1;
console.log(y);

if (y ===1){
    let y = 10;
    console.log(y);
}

console.log(y);

var x =10;
console.log(window.x);  */