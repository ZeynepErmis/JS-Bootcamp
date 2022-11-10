// JS Single Thread 
// JS Synchronous
//JavaScript is a synchronous, blocking, single-threaded language

/* const func1 = () => {
    console.log("Func 1 Console Log 1");
    console.log("Func 1 Console Log 2");
    alert('Alert Message');
}
const func2 = () => {
    console.log("Func 2 Console Log 1");
    console.log("Func 2 Console Log 2");
}
func1();
func2();  */

/* let x = 10;
console.log("First " + x);

setTimeout( () =>{
x = x + 5;
}, 2000)

console.log("Second " + x);

x = x + 5;
console.log("Third " + x); */

// Call Stack

/* function func1() {
    console.log("First");
    func2();
    console.log("First");
}

function func2() {
    console.log("Second");
    func3();
    console.log("Second");
}

function func3() {
    console.log("Third");
}

func1();
 */

/* function add(x, y) {
    return x + y;
}

function average(x, y) {
    return add(x, y) / 2;
}

let x = average(6, 8);
console.log(x); */

/* function task(message) {
    let n = 10000;
    while (n > 10) {
        n--
    }
    console.log(message);
}

console.log('1');

setTimeout(() => {
    //call back
    console.log('2');
}, 1000)

console.log('3');
console.log('4');

task('Succesful');

setTimeout(() => {
    //call back
    console.log('5');
}, 2000)

task('Succesful 2');
 

//A callback is a function passed as an argument to another function

/* const myName = () => {
    console.log("Zeynep");
}

setTimeout(myName, 3000); */

/* setTimeout(() => {
    console.log("Zeynep");
}, 3000) 
 */

/* const books = [
    { name: "Pinball 1973", author: "Haruki Murakami" },
    { name: "Freedom", author: "Zygmunt Bauman" },
    { name: "X", author: "Y" }
]

const listBooks = () => {
    books.map((book, index) => {
        console.log(book, index)
    })
}

const addNewBook = (newBook, callback) => {
    books.push(newBook)
    callback();
}

addNewBook({ name: "A", author: "B " }, listBooks); */