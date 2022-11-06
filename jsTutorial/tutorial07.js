//CLASS DECLARATION

//constructor: 1. Creates a new object in memory
//2. It binds this keyword to that object.

/* class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    //fullName method is in prototype
    fullName() {
        return this.name + " " + this.surname;
    }
    //Static class methods are defined on the class itself. 
    //You cannot call a static method on an object, only on an object class

    static showName = "Person";

    static staMethod() {
        console.log("This is an example of static method");
    }


}

const person1 = new Person("John", "Doe", 40);
const person2 = new Person("Zeynep", "Ermis", 21); */

/* //prints true
console.log(person1 instanceof Person);
console.log(typeof Person); */

/* console.log(person1.fullName());
console.log(person2.fullName()); */

//FALSE! cannot decide which instance to run!
//console.log(Person.fullName());

//FALSE! Static method and property cannot be accessed through instance object.
//console.log(person1.showName);
//console.log(person1.staMethod());

/* console.log(Person.showName);
console.log(Person.staMethod()); */


//One of reason for the need for class in object-oriented programming:
//It makes the job easier to break down the problems as much as possible. 
//Then it simplifies the work while developing the program, making it easier to catch bugs. 
//Those classes act as a template of the instances, that is, of the objects that will be derived from them. 
//Classes are templates for objects.
/* 
class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    //fullName method is in prototype
    fullName() {
        return this.name + " " + this.surname;
    }
}
 */

// INHERITANCE

//Engineer --> Subclass (child) - Person Superclass (parent)
/* class Engineer extends Person {};

const person1 = new Engineer("Zeynep", "Ermis", 21);
const person2 = new Person("John", "Doe", 40); */

/* console.log(person1);
console.log(person2); */

// OBJECT + (name, surname, age) --> Person
// Person --> Engineer

/* console.log(person1 instanceof Person);
console.log(person1 instanceof Engineer);
console.log(person2 instanceof Person);
console.log(person2 instanceof Engineer); */

/* class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    //fullName method is in prototype
    fullName() {
        return this.name + " " + this.surname;
    }
}

class Engineer extends Person {
    constructor(name, surname, age, job) {
        super(name, surname, age);
        this.job = job;
    }

    getMoney() {
        console.log("MONEY");
    }
};

const person1 = new Engineer("Zeynep", "Ermis", 21, "student");
const person2 = new Person("John", "Doe", 40);

console.log(person1);
console.log(person2);

// OBJECT + (name, surname, age) --> Person
// Person + job, getMoney()--> Engineer */

/* class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    //fullName method is in prototype
    fullName() {
        return this.name + " " + this.surname;
    }
}

class Engineer extends Person {
    constructor(name, surname, age, job) {
        //have to write super(name, surname, age) from its parent
        super(name, surname, age);
        this.job = job;
    }

    getMoney() {
        console.log("MONEY");
    }
}; */

class ExtendedArray extends Array {
    shuffle() {
        this.sort(() => Math.random() - 0.5);
    }
}

let myArr = new ExtendedArray(1, 2, 3, 4, 5);

console.log(myArr instanceof ExtendedArray);
console.log(myArr instanceof Array);
console.log(myArr);
myArr.shuffle();
console.log(myArr);
