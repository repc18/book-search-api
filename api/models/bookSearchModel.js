// File for the books data model
const sql = require('./db');

// Constructor
const Book = function (book) {
    this.title = book.title;
    this.author = book.author;
    this.isbn = book.isbn;
    this.publisher = book.publisher;
    this.publication_year = book.publication_year;
    this.last_modified_date = book.last_modified_date;
    this.created_date = book.created_date;
};

// Create a new book data
Book.create = (newBook, result) => {
    sql.query("INSERT INTO books SET ?", newBook, (err, res) => {
        if (err) {
            console.log("error: " + err);
            result(err, null);
            return;
        }

        console.log("created book: ", { id: res.insertId, ...newBook });
        result(null, { id: res.insertId, ...newBook });
    });
};

// Find book by their id
Book.findById = (bookId, result) => {
    sql.query("SELECT * FROM books WHERE id = " + bookId, (err, res) => {
        if (err) {
            console.log("error: " + err);
            result(err, null);
            return; 
        }

        if (res.length) {
            console.log("found customer: ", res[0]);
            result(null, res[0]);
            return;
        }

        // Cannot find the book with the id
        result({ kind: "Not Found" }, null);
    });
};

// Get all the books
Book.getAll = result => {
    sql.query("SELECT * FROM books", (err, res) => {
        if (err) {
            console.log("error: " + err);
            result(err, null);
            return; 
        }

        console.log("books: " + res);
        result(null, res);
    });
};

Book.updateById = (id, book, result) => {
    sql.query("UPDATE books SET title = ?, author = ?, isbn = ?, publisher = ?, publication_year = ?, last_modified_date = ?, created_date = ? WHERE id = ?",
    [book.title, book.author, book.isbn, book.publisher, book.publication_year, book.last_modified_date, book.created_date],
    (err, res) => {
        if (err) {
            console.log("error: " + err);
            result(err, null);
            return; 
        }

        if (res.affectedRows == 0) {
            // didn't find customer with the Id
            result({ kind: "Not Found" }, null);
            return;
        }

        console.log("updated book: ", { id: id, ...book });
        result({ id: id, ...book })
    }
    );
};

Book.remove = (id, result) => {
    sql.query("DELETE FROM books WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: " + err);
            result(err, null);
            return; 
        }

        if (res.affectedRows == 0) {
            // didn't find customer with the Id
            result({ kind: "Not Found" }, null);
            return;
        }

        console.log("deleted customer with the id: " + id);
        result(null, res);
    });
};

Book.removeAll = result => {
    sql.query("DELETE FROM books", (err, res) => {
        if (err) {
            console.log("error: " + err);
            result(err, null);
            return; 
        }

        console.log("deleted " + res.affectedRows + " books");
        result(null, res);
    });
};

module.exports = Book;