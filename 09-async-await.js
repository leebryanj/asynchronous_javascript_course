/*
Promises / Async-Await

Async-Await is essentially syntactic sugar built on top of promises to make it easier to work with asynchronous code.

An async function will return a Promise, and we can use the await keyword inside that function to await for the Promise to resolve.

The code will look more synchronous and therefore, easier to read.
*/

const preHeatOven = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const preHeatOven = true; // change to false to get to catch block

            if (preHeatOven) {
                resolve("Preheat oven to 180°");
            } else {
                reject("Failed Task One");
            }
        }, 1000);
    })
};
const addSugarAndChocoChips = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const addChoco = true;

            if (addChoco) {
                resolve("Place butter and chocolate ships, stir until melted and smooth");
            } else {
                reject("Failed Task");
            }
        }, 1000);
    })
};
const addFlourCocoaAndSalt = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const addSaltFlour = true;

            if (addSaltFlour) {
                resolve("Add flour, coco and salt and stir until smooth");
            } else {
                reject("Failed Task");
            }
        }, 1000);
    })
};
const bakeMixture = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bakeMixture = true;

            if (bakeMixture) {
                resolve("Bake for 24 minutes for really gooey center");
            } else {
                reject("Failed Task");
            }
        }, 1000);
    })
};

// To make this an async function, we need to use the async keyword before the brackets ()
// Because we defined this as an async function, we can use the await keyword inside this function
// Using async/await, we are writing asynchronous code in a synchronous manner
// Wrapping the statements in a try/catch can allow us to catch the errors
const bakeChocolateBrownies = async () => {
    try {
        const taskOne = await preHeatOven(); // await a Promise
        console.log(taskOne); // once the promise is completed (resolved or rejected), it will console.log

        const taskTwo = await addSugarAndChocoChips();
        console.log(taskTwo);

        const taskThree = await addFlourCocoaAndSalt();
        console.log(taskThree);

        const taskFour = await bakeMixture();
        console.log(taskFour);

        console.log("Enjoy! Your perfect Chocolate Brownies");
    }
    catch (error) {
        console.log(error);
    }

}

bakeChocolateBrownies();