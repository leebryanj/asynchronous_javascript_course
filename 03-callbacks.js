/*
Callbacks

A callback is a function that's passed in as an argument to another function, that will then execute the callback based on the result.

They are basically functions that are executed only after a result is produced.
*/
// If we wanted to fire these off in the correct order, we can use these setTimeouts, put them inside of functions, and then use callbacks to fire them off.
// To fire of the functions in the order that we want, we will insert a callback inside each of the tasks as an argument.
// Below, we have a callback as our parameter. Then every time a section is complete, we then execute the callback to the next function. This gives us the ability to fire off this list in the correct order.
function task1(callback) {
    setTimeout(() => {
        console.log("1. Preheat the oven to 350°F (180°C");
        callback();
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("2. Chop half the chocolate into chunks & melt in microwave.");
        callback();
    }, 2000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("3. Mix butter & sugar");
        callback();
    }, 1500);
}

function task4(callback) {
    setTimeout(() => {
        console.log("4. Beat in the eggs and vanilla for 1-2 minutes");
        callback();
    }, 3000);
}

function task5(callback) {
    setTimeout(() => {
        console.log("5. Whisk in the melted chocolate");
        callback();
    }, 4000);
}

function task6(callback) {
    setTimeout(() => {
        console.log("6. Fold in the other half of chocolate chunks, then transfer the batter to baking dish");
        callback();
    }, 3500);
}

function task7(callback) {
    setTimeout(() => {
        console.log("7. Bake for 20-25 minutes, then let cool completely");
        callback();
    }, 1800);
}

function task8(callback) {
    setTimeout(() => {
        console.log("8. Slice, serve & enjoy!");
        callback();
    }, 500);
}

// These tasks will now fire off in the correct order that they are called using callbacks. Each task waits for the timeout to complete before executing the next task.
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => {
                    task6(() => {
                        task7(() => {
                            task8(() => {

                            });
                        });
                    });
                });
            });
        });
    });
});
/*
When you call task1(...), task1 starts
It schedules a timer, then task1 immediately returns. The actual work hasn't happened yet. (Additional note below)
One second later...
The function inside setTimeout runs:
() => {
    console.log(...);
    callback();
}
Now: print console log.
Immediately after printing, callback(); runs.
That starts task2.

The entire outer () => {} is the callback parameter/variable. That entire anonymous function becomes the value of callback:
() => {
    task2(() => {
        / ...
    });
})
is passed as the callback into task1 when it is called.
*/
/*
Additional note:
Scheduled timer and immediately returns. Once timer is finished, it runs code inside setTimeout. This is why:
console.log("A");
setTimeout(() => {
    console.log("B");
}, 1000);
console.log("C");

Returns:
A
C
(wait)
B

What is happening is:
console.log("A")      ← prints immediately
setTimeout(...)       ← schedules timer and immediately returns
console.log("C")      ← runs immediately
1 second passes
console.log("B")      ← finally runs
*/

// The above is also the shape of callback hell (more in the next section).
// All this nesting is starting to look like a triangle. This is what we call: callback hell.
// It is when you run into the trouble of nesting many callbacks inside of other callbacks.
// The callbacks (if they weren't written in this methodical way) can become quite unmanageable.