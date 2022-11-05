//FUNCTIONS

//FUNCTION DECLERATION //statement

/* function square(num) { //num variable called a parameter
    return (num * num);
} */

//square(5); //The variables uses while running the function are called arguments.
//console.log(square(5));

//prints square function
//console.log(square);

//it will print NaN, there is no variable assigned to the num

// invoke --> ()
//console.log(square(4));

//FUNCTION DECLERATION --> HOISTED  console.log(square(3));

//Function Expression, function name is generally optinal
/* const square = function square(num) {
    return (num * num);
} */

/* const square = function (num) {
    return (num * num);
}
 */

//NaN console.log(square());

//prints the function console.log(square);

//invoke console.log(square(5));

//FIRST - CLASS FUNCTIONS
/*
const myArr = [6, "Arin", function () { console.log("Array Elemenet"); }];

myArr[2]();

const myObj = {
    age: 21,
    name: "Zeynep",
    func: function () { console.log("Object Element"); }
}

myObj.func();

//Immediately-Invoked Function Expression (IIEF)
console.log(20 + (function () { return 10; })());
 */


//FUNCTION EXPRESSION IS NOT HOISTED!
//Function Expression can be ananymous

/* console.log(square);
square(5);
 */

/* const square = function (num) {
    return (num * num);
}; */

// FIRST-CLASS FUNCTIONS...

/* const addFive = function (num, func) {
    console.log(num + func());
};

addFive(10, function () { return 5; }); */

//the function can be used in the return statement of another function
/* const myFunc = function (num) {
    return function toDouble() {
        console.log(num * 2);
    }
} */

//myFunc(8)();

/* const result = myFunc(7);
result(); */

//IIFE
/* (function () {
    console.log(5 + 12);
})();
 */


/* function square(num1, num2) {
    return (num1 * num2);
}

console.log(square.length); */