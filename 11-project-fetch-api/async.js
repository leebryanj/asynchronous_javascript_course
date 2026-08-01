/*
Fetch API Project

Fetch API is a feature that allows you to make HTTP requests to a web server. You can make get, post, put, delete requests. It's built-in to modern browsers, so we don't need additional libraries or packages to use the fetch API.

Simply, the fetch API makes it easy to get information from a website and do something with that data in the browser or environment we are working in. It uses JavaScript promises to make requests from the web browser.

Fetch API requires the URL of the resource we want to fetch, plus some additional code that tells the browser what to do with the response from the server.

fetch() function accepts 2 parameters. The URL to send the request to (required). The things you want to put in the request, such as the reqeust method (optional).
// fetch('<URL>', {})
*/

// Sample get request using fetch API:
fetch('https://dummyjson.com/products/1', {})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));


// If we want to do a post request (to add a product), we need to define the second argument:
fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        description: 'iPhone 20',
        price: '1000',
        rating: '9/10'
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
// When we send the post method, we also need to set the request header and body properties.

// Put request example to update an existing product:
fetch('https://dummyjson.com/products/1', {
    method: 'PUT',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        title: 'iPhone 20',
        description: 'Changed to iPhone 20',
        price: '1000',
        rating: '9/10'
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

// Delete request to delete a product:
fetch('https://dummyjson.com/products/1', {
    method: 'DELETE',
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));


// Fetch API using async/await:
const getAllProducts = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products/');
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}
// Easier to use async/await
getAllProducts();