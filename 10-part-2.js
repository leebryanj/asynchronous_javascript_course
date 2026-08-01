/*
Quick Recap - The evolution of promises

1. Started with callbacks. Because JavaScript was single threaded (executes line by line in order), we first use callbacks to help us write asynchronous code.

To create an asynchronous function and call an asynchronous, we first had to pass a callback as an argument. But this quickly led to callbacks becoming deeply nested and this led to what we call "callback hell".

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                ...
            });
        });
    });
});

2. To solve the issue of callback hell, JavaScript introduced promises. This simplified working with callbacks and made for better syntax.

You create a promise, then one of the powerful features was the ability to chain asynchronous operatioins together. This allows us to perform sequential operations in a more readable and organized manner. By chaining promises, we would use the .then() method which takes a callback function as a parameter. The callback function receives the resolve value of the previous promise as its argument. Then inside that callback function, we return a new promise to continue the chain. Or if we wanted to have errors, we would use the .catch() method.

promise
    .then((value) => {
        console.log(value);
        return promiseTwo;
    })
    .then((value) => {
        console.log(value);
        return promiseThree;
    })
    .catch((error) => {
        console.log(error);
    })

However, chaining could still lead to callback hell.

3. To tackle the issue of promise chaining hell, JavaScript introduced async/await. Async/await is much easier to read, follow and maintain. It improves code readability for asynchronous operations. This is the modern way of using promises.

const bakeChocolateBrownies = async () => {
        const taskOne = await preHeatOven();
        console.log(taskOne);

        const taskTwo = await addSugarAndChocoChips();
        console.log(taskTwo);

        const taskThree = await addFlourCocoaAndSalt();
        console.log(taskThree);

        const taskFour = await bakeMixture();
        console.log(taskFour);

        console.log("Enjoy!");
    }
*/