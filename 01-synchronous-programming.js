/*
What is Synchrnous programming?

Synchronous programming follows a straight set of sequences.
When the code runs, it will do each step in order:
Task 1 -> Task 2 -> Task 3
It will never do Task 3 or Task 2 first. It will always follow in a synchronous manner - it will always be sequential.

*/

// Synchronous (Synchronous Programming)!

// Each line is logged to the console sequentially., 1st, 2nd, 3rd, etc. in order.
// This is synchronous programming - the code will execute the task in the order that you see them. It will wait for each task to be completed before moving on to the next one.
console.log("Preheat the oven to 350°F (180°C");
console.log("Chop half the chocolate into chunks & melt in microwave.");
console.log("Mix butter & sugar");
console.log("Beat in the eggs and vanilla for 1-2 minutes");
console.log("Whisk in the melted chocolate");
console.log("Fold in the other half of chocolate chunks, then transfer the batter to baking dish");
console.log("Bake for 20-25 minutes, then let cool completely");
console.log("Slice, serve & enjoy!");

// The problem with synchronous programming is that it can be problematic in certain situations. This is particularly evident when dealing with tasks that take a significant amount of time to complete.
// For example, we need to wait for a task to complete from a remote server or API. The program will actually be stuck waiting for the response and won't be able to do anything else until the response is returned. This is sometimes known as blocking and this can lead to a lot of programs appearing unresponsive or frozen.