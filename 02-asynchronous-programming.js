/*
What is Asynchronous programming?

- Asynchronous programming is a process that allows an application to run a second set of instructions while focusing on its primary or basic process.
- Asynchronous programming has several benefits, including improved application performance, wide application to different coding languages, and better user experience.
- A few use cases for asynchronous programming include reduced inefficiencies from an application and efficient data collection.
*/

// With this example, each console.log within each setTimeout is not firing off in sequential order from 1-8 anymore. It's based on the set amount of time from the setTimeout function.
// The function passed to the setTimeout function will be executed asynchronously, which means the program will continue to execute the next line of code without waiting for the other setTimeout to complete.
setTimeout(() => {
    console.log("1. Preheat the oven to 350°F (180°C");
}, 1000);

setTimeout(() => {
    console.log("2. Chop half the chocolate into chunks & melt in microwave.");
}, 2000);

setTimeout(() => {
    console.log("3. Mix butter & sugar");
}, 1500);

setTimeout(() => {
    console.log("4. Beat in the eggs and vanilla for 1-2 minutes");
}, 3000);

setTimeout(() => {
    console.log("5. Whisk in the melted chocolate");
}, 4000);

setTimeout(() => {
    console.log("6. Fold in the other half of chocolate chunks, then transfer the batter to baking dish");
}, 3500);

setTimeout(() => {
    console.log("7. Bake for 20-25 minutes, then let cool completely");
}, 1800);

setTimeout(() => {
    console.log("8. Slice, serve & enjoy!");
}, 500);