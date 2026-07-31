/*
Chaining Promises

Creating a promise starts it immediately.
By the time JavaScript reaches the below promise.then(...) chain, all 3 Promises have already executed their executor functions.

The important part is that we are not running promiseTwo (at return promiseTwo;). We are returning a Promise object.

Why does JavaScript wait?
Because when a .then callback returns:
a normal value → the next .then() receives that value immediately.
another Promise → the next .then() waits until that Promise settles.

Versus nested callbacks:
The difference is that Promises flatten the flow into a readable chain instead of deeply nested callbacks. That’s one of the main reasons Promises were introduced—they help avoid the “callback hell”.

Don't nest the promise.then(), and keep it flat. That would just bring us back to callback hell.
*/

// We can actually chain promises onto other promises:
const promise = new Promise((resolve, reject) => {
    resolve("Well Done! Promise One is Resolved")
});
const promiseTwo = new Promise((resolve, reject) => {
    resolve("Well Done! Promise Two is Resolved")
});
const promiseThree = new Promise((resolve, reject) => {
    reject("Promise Three is Rejected")
});

promise
    .then((value) => {
        console.log(value);
        return promiseTwo; // this returned value is what is passed as the value into the next .then()
    })
    .then((value) => {
        console.log(value);
        return promiseThree; // Since promiseThree returns a reject, it would skip any remaining .then() and go to the catch block
    })
    .catch((error) => {
        console.log(error);
    })

// Don't do this:
promise
    .then((value) => {
        console.log(value);
        promiseTwo.then((data) => {
            console.log(data);
            promiseThree.then((data) => {
                console.log(data);
            }).catch((error) => {
                console.log(error);
            });
        });
    })
    .catch((error) => {
        console.log(error);
    });
// It still works the same, but brings us back to the nested problem.
