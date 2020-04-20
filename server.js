const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS
// view engine setup
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales', function(err) {
    if (err) {
        console.log(err);
    }
});



app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'Cristian',
        anio: new Date().getFullYear()
    });
});

app.get('/about', function(req, res) {
    res.render('about', {

    });
});

app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto ' + port);
});