const axios = require('axios');

// Get all books using async/await
async function getAllBooks(callback) {
    try {
        const response = await axios.get('http://localhost:3000/books'); // Replace with your endpoint
        callback(null, response.data);
    } catch (error) {
        callback(error, null);
    }
}

// Usage
getAllBooks((error, books) => {
    if (error) {
        console.error("Error fetching books:", error);
    } else {
        console.log("All Books:", books);
    }
});



// Search by ISBN using Promises
function searchByISBN(isbn) {
    return axios.get(`http://localhost:3000/books/${isbn}`) // Replace with your endpoint
        .then(response => response.data)
        .catch(error => {
            console.error("Error fetching book by ISBN:", error);
            throw error;
        });
}

// Usage
searchByISBN('12345')
    .then(book => console.log("Book found by ISBN:", book))
    .catch(error => console.error("Error:", error));


    // Search by Author using async/await
async function searchByAuthor(author) {
    try {
        const response = await axios.get(`http://localhost:3000/books?author=${author}`); // Replace with your endpoint
        return response.data;
    } catch (error) {
        console.error("Error fetching books by author:", error);
        throw error;
    }
}

// Usage
searchByAuthor('John Doe')
    .then(books => console.log("Books by Author:", books))
    .catch(error => console.error("Error:", error));


// Search by Title using async/await
async function searchByTitle(title) {
    try {
        const response = await axios.get(`http://localhost:3000/books?title=${title}`); // Replace with your endpoint
        return response.data;
    } catch (error) {
        console.error("Error fetching books by title:", error);
        throw error;
    }
}

// Usage
searchByTitle('Book Title')
    .then(books => console.log("Books by Title:", books))
    .catch(error => console.error("Error:", error));
