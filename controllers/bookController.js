const Book = require('../models/bookModel');
const fs = require('fs');

const BookController = {
    //Get All
    getAll: async (req,res) => {
        try {
            const books = await Book.find();
            res.json(
                books.map((book) => {
                    return {
                        ...book,
                        id: book._id,
                        title: book.title,
                        author: book.author,
                        description: book.description,
                        isbn: book.isbn,
                        condition: book.condition,
                        price: book.price,
                        image: book.image.contentType
                        ? `data:${
                                book.image.contentType
                            };base64,${book.image.data.toString('base64')}`
                            : {},
                    };
                })
            );
        }catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    //Get One
    getOne: async (req,res) => {
        try {
            const book = await Book.findById(req.params.bookId).exec();
            if (book == null) {
                return res.status(404).json({ message: 'Cannot find book' });
            }
            res.json({
                ...book,
                id: book._id,                                                                                                                                                                        
                title: book.title,
                author: book.author,
                description: book.description,
                isbn: book.isbn,
                condition: book.condition,
                price: book.price,
                image: book.image.contentType
                ? `data:${
                        book.image.contentType
                    };base64,${book.image.data.toString('base64')}`
                    : {},
            });
        } catch (err) {
            res.sendStatus(404);
        }
    },

    //Create
    create: async (req,res) => {
        let book;
        if (req.file) {
            const imgData = fs.readFileSync(req.file.path);
            book = new Book({
                ...req.body,
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                isbn: req.body.isbn,
                condition: req.body.condition,
                price: req.body.price,
                image: imgData
                ? {data:imgData, contentType: "image/png"}
                : {contentType: ""},
            });
        } else {
            book = new Book ({
                ...req.body,
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                isbn: req.body.isbn,
                condition: req.body.condition,
                price: req.body.price,
                image: {contentType: ""},
            });
        }

        try {
            const newBook = await book.save();
            res.status(201).json(newBook);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    //Delete
    delete: async (req, res) => {
        try {
            await Book.remove({ _id: req.params.bookId });
            res.json({ message: 'Book deleted successfully' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
}; 
module.exports = BookController;          