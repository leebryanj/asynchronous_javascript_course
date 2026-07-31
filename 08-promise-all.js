/*
Promise.All()

Promise.All() is particularly useful when you have many promises that you want to fire off or check, but if one of them gets rejected, then it all fails.

You are checking if the promises are fulfilled. If one of the promises from all the promises fails, then the entire things fails.
*/

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise One Resolved!");
    }, 2000);
});

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Two Resolved!");
    }, 1500);
});

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise Three Rejected!"); // Change this to resolve if we want to see all 3 promises resolved.
    }, 1500);
});

// Feed the (multiple) promises as an array as input into Promise.all()
Promise.all([promiseOne, promiseTwo, promiseThree])
    .then((data) => {
        console.log(data[0], data[1], data[2]);
    })
    .catch((error) => {
        console.log(error);
    });

// If any of the 3 promises are rejected, it will only fire off the rejected promise in the result. We don't see the other logs, and the remaining .then() would not run.
// Promise.all() is useful if we were requesting data from an API and only want to do something with the data if all the requests are successful.