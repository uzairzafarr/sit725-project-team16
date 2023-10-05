const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    
    password: {
        type: String,
        required: true,
    },

    bookListings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book",
        },
    ],
});

module.exports = mongoose.model("Users", UserSchema);
