// File to define all the api routes
module.exports = app => {
    const books = require("../controllers/bookSearchController");

    // Create a new book
    app.post("/books", books.create);

    // Retrieve all books
    app.get("/books", books.findAll);

    // Retrieve single book with book id
    app.get("/books/:bookId", books.findOne);

    // Update a book with book id
    app.put("/books/:bookId", books.update);

    // Delete a book with book id
    app.delete("/books/:bookId", books.delete);

    // Delete all books data
    app.delete("/books", books.deleteAll);
};