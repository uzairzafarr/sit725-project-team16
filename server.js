let express = require('express');
const mongoose = require('mongoose');
require ('dotenv').config();
const BookController = require('./controllers/bookController');
const multer = require('multer');
const upload = multer({dest: './uploads'});

const url = 'mongodb+srv://sumyat:tUNOOeG31Nz8qEEH@cluster0.0faqfif.mongodb.net/?retryWrites=true&w=majority';

// `mongodb+srv://${process.env.MONGO_USERNAME}:${encodeURIComponent(
//   process.env.MONGO_PASSWORD
// )}@cluster0.0faqfif.mongodb.net/?retryWrites=true&w=majority`;


main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(url, {
    useNewUrlParser: true,
  });
}

let app = express();
let port = process.env.port  || 3005 ;

app.use(express.static(__dirname + '/'));

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/index.html');
});

app.get('/listing', (req, res)=> {
    res.sendFile(__dirname + '/listing.html');
});

app.get('/book', (req, res)=> {
    res.sendFile(__dirname + '/book.html');
});

app.post('/api/book', upload.single('image'), BookController.create);
app.get('/api/books', BookController.getAll);
app.get('/api/book/:bookId', BookController.getOne);
app.delete('/api/book/:bookId', BookController.delete);

app.listen(port, () =>{

    console.log('Welcome to server SIT725 on port: ' + port + ' :)');
});