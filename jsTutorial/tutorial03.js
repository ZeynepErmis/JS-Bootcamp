//OBJECTS (collection of properties)

//property --> name surname
//method --> fullName (functions which in the object are called methods)
/* const person = {
    name: "John",
    surname: "Doe",
    age: 40,
    languages: ["Turkish", "English", "Spanish"],
    fullName: function () {
        return this.name + "" + this.surname
    },
    address: {
        city: "London",
        district: "West"
    }
} */

//OBJECT LITERAL

/*
const person = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    fullName: function () {
        return this.name + " " + this.surname
    }
}

console.log(person);

// dot Natation
console.log(person.name);
console.log(person.fullName());

person.job = "Student";

console.log(person);
console.log(person.job);

//bracket Notation
console.log(person['name']);
console.log(person['fullName']());
console.log(person['na' + 'me']); // 'na' + 'me' --> 'name' */

/* const person = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    fullName: function () {
        return this.name + " " + this.surname
    }
}
person.address = {};
console.log(person);
person.address.city = "London";
console.log(person);
 */


// CONSTRUCTOR

/* function Person(name, surname, age) {
    const obj = {};
    obj.name = name;
    obj.surname = surname;
    obj.age = age;
    obj.fullName = function () {
        return obj.name + " " + obj.surname
    }
    return obj;
} */


/* //this = current object
function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function () {
        return this.name + " " + this.surname
    }
}

// new --> creates an empty object
const person1 = new Person("John", "Doe", 40);
console.log(person1);
*/


// OBJECT CONSTRUCTOR

/* const person1 = new Object();
person1.name = 'John';
person1.surname = 'Doe';
person1.age = 40
person1.fullName = function () {
    console.log(this);
    return this.name + " " + this.surname
}
console.log(person1.fullName()); */

/* 
// creating object with Object.create() 
const person = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    fullName: function () {
        return this.name + " " + this.surname
    }
}

console.log(person);

//Object.create --> using an existing object when creating a new object.
const Jack = Object.create(person);
Jack.name = 'Jack';
Jack.surname = 'William';
Jack.age = 35;

console.log(Jack);
console.log(Jack.fullName()); */