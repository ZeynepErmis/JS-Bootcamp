// THIS KEYWORD --> refers to an object that is executing the current piece of code

// obj.func() --> this obj

// this --> global object --> window(global)
/* console.log(this);
console.log(this.location);
console.log(this.location.href);
console.log(window.location.href);

console.log(this === window); */

/* const name = "John";
//prints JOHN
console.log(name);
//prints ZEYNEP! 
console.log(this.name); */

// Function Declaration -- HOISTED!
/* function func1() {
    this.name = "Zeynep";
    console.log(this);
    console.log(this.location);
    console.log(window.location.href);
    console.log(this.age);
}

// Function Expression --> NOT HOISTED!!
const func2 = function () {
    //this refers to the window object
    this.age = 21;
    console.log(this);
    console.log(this.location);
    console.log(window.location.href);
    console.log(this.name);
}

func1();
func2(); */

/* console.log(name);
console.log(this.name);
console.log(age);
console.log(this.age);
 */

//Constructor Funtion

/* function Person(name2, surname2, age2) {
    //assign the incoming parameter to the object as a property.
    const obj = {};
    //prints empty object
    console.log(obj);
    obj.name = name2;
    console.log(obj);
    obj.surname = surname2;
    console.log(obj);
    obj.age = age2;
    console.log(obj);
    obj.fullName = function () {
        return obj.name + " " + obj.surname
    }
    return obj;
}

const person1 = new Person("Zeynep", "Ermis", 21);
console.log(person1); */

/* function Person(name2, surname2, age2) {
    this.name = name2;
    this.surname = surname2;
    this.age = age2;
    this.fullName = function () {
        return this.name + " " + this.surname
    }
} */

/* class Person {
    constructor(name2, surname2, age2) {
        this.name = name2;
        this.surname = surname2;
        this.age = age2;
    }
    fullName = function () {
        return this.name + " " + this.surname
    }
} */

//Object Literal

/* const person1 = {
    name: "Zeynep",
    age: 5,
    surname: "Ermis",
    fullName: function () {
        console.log(this);
        return this.name + " " + this.surname;
    },

    mother: {
        name: "Fatma",
        age: 46,
        surname: "Ermis",
        fullName: function () {
            console.log(this);
            return this.name + " " + this.surname;
        }
    }
}

console.log(person1.fullName());
console.log(person1.mother.fullName()); */

/* const person2 = {
    name: "Rana",
    funcy: function() {
        console.log(this === person2);
        console.log(this === window);
    }
}
//console.log(person2.funcy());
const funcy2 = person2.funcy;
console.log(funcy2()); */

/* 
 const person2 = {
    name: "Rana",
    funcy: function() {
        console.log(this === person2);
        setTimeout(function(){ //is not related to the person2 object 
            console.log(this === person2);
            console.log(this === window);
        }, 2000)
    }
}

console.log(person2.funcy());  */