const routes = require('./routes/routes');

const express = require('express');
const hbs = require('hbs');
var bodyParser = require('body-parser')

const app = express();
const PORT = 3000;


hbs.registerPartials( 'server/views/partials', function (err) {});
hbs.registerHelper('ifeq', function (a, b, options) {
    if (a == b) { return options.fn(this); }
    return options.inverse(this);
});
app.set('view engine', 'hbs');
app.set("views",  "server/views");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('./public'));

app.use(routes);

app.listen(PORT, () => console.log('El puerto esta corriendo en el puerto : ' + PORT));     