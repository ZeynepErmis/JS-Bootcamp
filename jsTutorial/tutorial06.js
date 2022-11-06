// JS CLASSES

// Constructor Function

/*  function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    //this.fullName = fullName;
} */

/* function fullName() {
    return this.name + " " + this.surname
} */

/* 
Person.prototype.fullName = function () {
    return this.name + " " + this.surname
}

Person.prototype.friends = ["X", "Y"];

const person1 = new Person("John", "Doe", 40);
const person2 = new Person("Zeynep", "Ermis", 21);

console.log(person1);
console.log(person2);

console.log(person1.friends);
console.log(person2.friends);

// problem when using reference data types in prototypes, how to solve it --> JS CLASSES
person1.friends.push("Z");
// both of them prints same friends!
console.log(person1.friends);
console.log(person2.friends); 
 */

/* function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = fullName;
}  */


//CLASS DECLARATION
/* class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.friends = ["X", "Y"];
    }

    //fullName method is in prototype
    fullName() {
        return this.name + " " + this.surname
    }
} */

//CLASS EXPRESSION
/* const Person = class {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.friends = ["X", "Y"];
    }

    //fullName method is in prototype
    fullName() {
        return this.name + " " + this.surname
    }
}


const person1 = new Person("John", "Doe", 40);
const person2 = new Person("Zeynep", "Ermis", 21);

console.log(person1);
console.log(person2);

console.log(person1.friends);
console.log(person2.friends);

person1.friends.push("Z");
console.log(person1.friends);
console.log(person2.friends);

//js classes are special functions
console.log(typeof Person); */