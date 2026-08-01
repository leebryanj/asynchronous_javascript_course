/*
Callback hell simple example
*/

// We want to display a message in the console asynchronously using callbacks
const showMessage = (callback) => {
    console.log(callback);
};

// We want the function to display the first part of the message:
const firstMessage = (callback) => {
    setTimeout(() => {
        showMessage("Hello");
        callback();
    }, 2000);
};

// Second part of the message:
const secondMessage = () => {
    showMessage("World");
};

firstMessage(secondMessage);
// Writing this simple example using callbacks makes it difficult to read. More functions would make it even more unmanageable.