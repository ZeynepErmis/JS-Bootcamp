// NEW OBJECT SYNTAX

//1- SHORTHAND PROPERTIES

/* let name = 'Zeynep', age = '21';

const myObj = {
    name: name,
    age: age
}
console.log(myObj); */

/* const myObj = {
    name,
    age
}
console.log(myObj); */

//2- COMPUTED PROPERTY NAMES

/* let prop1 = 'name';

let myObj = {};

myObj[prop1] = 'Zeynep';

console.log(myObj); */

/* let prop2 = 'name';
//a variable can be assigned as a property
let myObj = {
    [prop2]: 'Zeynep'
};

console.log(myObj); */

//3- SHORT METHOD SYNTAX

/* const person = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    fullName: function () {
        return this.name + " " + this.surname
    }
} */

/* const person = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    fullName () {
        return this.name + " " + this.surname
    }
}

console.log(person.fullName()); */

//4- OBJECT DESTRUCTURING

//assigning the properties of the object to a variable

/* const person = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    fullName() {
        return this.name + " " + this.surname
    }
} */
/* 
let myVar1 = person.name;
console.log(myVar1);

let myVar2 = person.age;
console.log(myVar2); */

//firstly write property of the object, then the variable
/* let { name: myVar1, age: myVar2 } = person;
console.log(myVar1);
console.log(myVar2); 
 */

//common syntax
/* let { name: name, age: age } = person;
console.log(name);
console.log(age);  */

/* let { name, age } = person;
console.log(name);
console.log(age); */

//5- SPREAD OPERATOR IN OBJECT LITERALS (...)

// Used to copy or combine the properties of an existing object
/* const person = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    fullName() {
        return this.name + " " + this.surname
    }
}

const person2 = {...person};
console.log(person2); */

/* const myObj1 = {
    name : 'Zeynep',
    age : 21
}

const myObj2 = {
    job : 'student',
    gender : 'female'
}

const zeynep= {...myObj1, school: 'UEL' ,...myObj2};
console.log(zeynep); */

//6- REST OPERATOR IN OBJECT LITERALS

/* const person = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    fullName() {
        return this.name + " " + this.surname
    }
} */

/* const { name, surname, age} = person;
console.log(name); */
/* 
const {name, ...rest} = person;
console.log(name);

//prints as an object
console.log(rest); */

//7- OBJECT VALUES - OBJECT ENTRIES

/* const person = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    fullName() {
        return this.name + " " + this.surname
    }
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
 */