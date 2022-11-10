//Promises are used to handle asynchronous operations in JavaScript

/*
const promise1 = new Promise(function (result, reject) {
    reject('ERROR2');
    result('DATA');
    result('DATA2');
    reject('ERROR');
    reject('ERROR2');
})

console.log(promise1);
 */

// pending (undefined) - fullfilled (succesfull) - rejected (error) => PROMISE STATES


/* const promise1 = new Promise(function (result, reject) {
    //result('DATA');
    reject('ERROR');
})

//cannot use that, prints undefined
//console.log(promise1.value);

// to call promise resolve --> then
/* promise1.then(function (value) {
    console.log(value);
}) */

//promise1.then(value => console.log(value));

// to call reject --> catch
//promise1.catch(reason => console.log(reason)); */

/* const promise1 = new Promise((resolve, reject) => {
    //resolve();
    reject();
});
 */
/* promise1.then(() =>{
    console.log('DATA RECEIVED');
});
 */

/* promise1.catch(() =>{
    console.log('DATA NOT RECEIVED');
});
*/

/* promise1
    .then(() => {
        console.log('DATA RECEIVED');
    })
    .catch(() => {
        console.log('DATA NOT RECEIVED');
    })
    .finally(() => {
        console.log('A Promise for the completion of the promise');
    })
 */

/* const promise1 = new Promise((resolve, reject) => {
    resolve();

});

promise1.then(() => {
    console.log('DATA RECEIVED');
}, () => {
    console.log('DATA NOT RECEIVED');
}); */

/* 
const books = [
    { name: "Pinball 1973", author: "Haruki Murakami" },
    { name: "Freedom", author: "Zygmunt Bauman" },
    { name: "X", author: "Y" }
]

const listBooks = () => {
    books.map((book, index) => {
        console.log(book, index)
    })
} */

/* const addNewBook = (newBook, callback) => {
    books.push(newBook)
    callback();
} */

/* const addNewBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook);
        // resolve(books);
        reject();
    })
    return promise1;
}

//addNewBook({ name: "A", author: "B " }, listBooks);

addNewBook({ name: "A", author: "B " }, listBooks)
    .then(() => {
        console.log('NEW LIST');
        listBooks();
    }).catch(() => {
        console.log('ERROR');
    })
 */

/* const addTwoNumbers = (num1, num2) => {
    const promise2 = new Promise((resolve, reject) => {
        const sum = num1 + num2;
        (typeof num1 !== 'number' || typeof num2 !== 'number')
            ? reject('Enter 2 numbers')
            : resolve(sum)
    })
    return promise2
}

addTwoNumbers(4, 8)
    .then((value) => {
        console.log('TOPLAM: ', value)
    })
    .catch((reason) => {
        console.log('HATA: ', reason)
    }) */