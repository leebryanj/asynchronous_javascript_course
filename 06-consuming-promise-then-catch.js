/*
Consuming Promises using Then/Catch.

An older method of consuming a promise is by using then and catch.

The syntax of using then and catch makes it easier to read and consume a promise than it was with nested callbacks. 
*/

// Older methods of consuming a promise using Then/Catch:
const promise = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10);

    setTimeout(() => {
        if (randomNumber < 4) {
            resolve("Well Done! You Guessed Right.");
        } else {
            reject("Oops! You Guessed Wrong!");
        }
    }, 2000);
});

// The then() method itself actually takes a callback when the promise is resolved, which takes one argument. The argument is actually the content inside the resolve() (ie. "Well Done! You Guessed Right.").
// We are getting the actual content for value when promise resolves, not just a fulfilled promise. That's quite important to distinguish.
// We also have a .catch() for the reject. It also takes a callback, which again, will have the value inside the reject() (ie. "Oops! You Guessed Wrong!").
promise.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
})
// With the above, we actually get the console logs for both the outputs of resolve and reject. Not just getting errors in the console before we implemented the .then and .catch.

// We can actually chain promises onto other promises: