const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
    },
    condition: {
        type: String,
        enum: ["new", "used"],
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    sellerId: {
        data: String,
        contentType: String,
  },
});

module.exports = mongoose.model("Book", BookSchema);
