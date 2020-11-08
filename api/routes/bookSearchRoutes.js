// File to define all the api routes
module.exports = app => {
    const books = require("../controllers/bookSearchController");

    // Create a new book
    app.post("/api/books", books.create);

    // Retrieve all books
    app.get("/api/books", books.findAll);

    // Retrieve single book with book id
    app.get("/api/books/:bookId", books.findOne);

    // Update a book with book id
    app.put("/api/books/:bookId", books.update);

    // Delete a book with book id
    app.delete("/api/books/:bookId", books.delete);

    // Delete all books data
    app.delete("/api/books", books.deleteAll);
};