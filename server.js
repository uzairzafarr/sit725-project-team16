let express = require('express');
let app = express();
let port = process.env.port  || 3005 ;

app.use(express.static(__dirname + '/'));

app.get('/', (req, res)=> {

    res.render('index.html');

});



app.listen(port, () =>{

    console.log('Welcome to server SIT725 on port: ' + port + ' :)');
});