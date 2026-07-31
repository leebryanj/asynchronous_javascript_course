/*
Promises

What is a Promise?

A promise is an assurance or guarantee that something will happen in the future. Real world: A person can promise another person a specific outcome or result. Programming: A promise is an object that holds the future value of an async operation.

Example: Requesting some data from a server, the promise, promises us to get that data which we can use in the future.

States of a Promise:
- Pending: Result is not ready. It's actually waiting for something to finish.
- Fulfilled: Promise has been resolved and the result is available.
- Rejected: An error has occurred (that we need to address).
*/

// Promise constructor:
// Takes a single argument (a callback). That callback takes 2 further callbacks (resolve and reject).
// Arrow function inside Promise() is immediately executed when the promise is created. Once the promise is created, it is either resolved (by calling the resolve callback), or it is rejected (by calling the reject callback).
const promise = new Promise((resolve, reject) => {
    const allWentWell = true; // true for resolve, false for reject

    if (allWentWell) {
        resolve("All things went well");
    } else {
        reject("Oops! Something went wrong!");
    }
});

console.log(promise);

// Promise example with pending:
const pendingPromise = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10);

    setTimeout(() => {
        if (randomNumber < 4) {
            resolve("Well Done! You Guessed Right.");
        } else {
            reject("Oops! You Guessed Wrong!");
        }
    }, 2000);
});

// This console log will initially set to pending Promise { <pending> }. When the promise is first created, it will be in the pending state. Then after 2 seconds, it can resolve or reject.
console.log(pendingPromise);
// In the pendingPromise example, we can't do anything with the resolve("Well Done! You Guessed Right."); data at the moment, despite it being fulfilled (or rejected). We actually need to consume the promise to then access that data.

// Initially when you set a promise, it's set to pending (or it's in a pending state). Then depending on the outcome, it will either resolve or reject. Those are the 3 states of a promise.