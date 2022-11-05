// OBJECTS - PART 2


// OBJECT + name, surname, age, fullName() --> person

/* const person = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    fullName: function () {
        return this.name + " " + this.surname
    }
}

console.log(person);
console.log(person.toString());
console.log(person.hasOwnProperty("name")); //prints true */

// OBJECT --> myObj

/* const myObj = {};
console.log(myObj);
console.log(myObj.toString()); */

/* function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function () {
        return this.name + " " + this.surname
    }
}
const person1 = new Person("John", "Doe", 6);
console.log(person1);
 */

// OBJECT + name, surname, age, fullName() --> Person --> person1
// the prototype for person1 --> Person
// the prototype for Person --> OBJECT

// toString and __proto__ are inherited from OBJECT
/* console.log(person1.toString());
console.log(person1.__proto__); */
/* 
const person2 = new Person("Zeynep", "Ermis", 21);
console.log(person2);

// OBJECT + name, surname, age, fullName() --> Person + job --> person2
person2.job = "Student";
console.log(person2);
console.log(person2.toString());

// An existing method in the prototype can be overwritten
person2.toString = function () {
    return "Zeynepp";
}

console.log(person2.toString());
 */

/* function Person(name, age) {
    this.name = name;
    this.age = age;
}

//can be written in prototype, the function is used for both object so we can add them (surname, fullName()) into prototype
Person.prototype.fullName = function () {
    return this.name + " " + this.surname
}
Person.prototype.surname = "Ermis";

const person1 = new Person("John", 6);
const person2 = new Person("Zeynep", 21);
console.log(person1);
console.log(person2); */

/* const person = {
    name: 'XXXX',
    surname: 'XXX',
    age: 0,
    fullName: function () {
        return this.name + " " + this.surname
    }
}

const person3 = Object.create(person);
console.log(person3);
console.log(person3.name);
person3.name = "John";
console.log(person3);

console.log(person3.hasOwnProperty("name"));
//PRINTS FALSE! there is no surname which related to person3 object, in its  prototype  
console.log(person3.hasOwnProperty("surname"));

//PRINTS TRUE!
console.log("surname" in person3);

//using the inheritance method of the prototype is aims to collect common properties in prototype
 */