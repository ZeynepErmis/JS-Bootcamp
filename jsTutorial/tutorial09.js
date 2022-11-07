// ARROW FUNCTION

// Function Declaration

/* function square(num) {
    return (num * num);
}
console.log(square(4));

// Function Expression

const square2 = function (num) {
    return (num * num);
}
console.log(square2(6));

// Arrow Function Expression

//const square3 = function (num) {return (num * num)} ;
//const square3 = (num) => { return (num * num) };
const square3 = num => (num * num);

console.log(square3(8));  */

/* window.name = "Zeynep";

function tellName() {
    console.log(this);
    console.log(this.name);
}

tellName();

const person = {
    name:"John",
    tellName: function(){
        console.log(this);
        console.log(this.name);
    }
}

person.tellName(); */

//Arrow functions don't have their own “this”, 
//and they don’t redefine the value of “this ”within the function.
//this inside an arrow function always refers to this from the outer context. 
/* var variable = “Global Level Variable”;
let myObject = { 
 variable: “Object Level Variable”, 
// PRINTS Global Level Variable
arrowFunction:() => { 
 console.log(this.variable); 
 },
// PRINTS Object Level Variable
regularFunction(){ 
 console.log(this.variable); 
 } 
};
myObject.arrowFunction(); 
myObject.regularFunction(); */

/* window.name = "Zeynep";

const tellName = () => {
    console.log(this);
    console.log(this.name);
}

tellName();

const person = {
    name: "John",
    tellName: () => {
        console.log(this);
        console.log(this.name);
    }
}

person.tellName();  */

/* window.name = "Zeynep";

const person = {
    name: "John",
    tellName: function () {
        console.log(this);
        console.log(this.name);

        setTimeout(function () {
            console.log(this);
            console.log(this.name);
        }, 2000)
    }
}

person.tellName();  */

//!!ANLAMADIM
/* window.name = "Zeynep";

const person = {
    name: "John",
    tellName: function () {
        console.log(this);
        console.log(this.name);

        setTimeout(() => {
            console.log(this);
            console.log(this.name);
        }, 2000)
    }
}

person.tellName();  */

//cannot use constructor function as an arrow function. 
//Reason arrow func. doesn't have this its own.

/* function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function () {
        return this.name + " " + this.surname
    }
}

const person1 = new Person("John", "Doe", 40);
console.log(person1); */

/* window.year = 100;

const myObj = {
    year: "2022",
    showYear: function () {
        console.log(this.year, this);
    },

    showYear2: () => console.log(this.year, this)
}

myObj.showYear();
myObj.showYear2(); */

//CALL

/* window.name = "Jack"
window.grade = "95"

const Student = {
    examResult: () => {
        return this.name + " " + this.grade
    }
}

const student1 = {
    name: "Zeynep",
    grade: "90"
}

const student2 = {
    name: "John",
    grade: "91"
}

console.log(Student.examResult.call(student1));
console.log(Student.examResult.call(student2)); */