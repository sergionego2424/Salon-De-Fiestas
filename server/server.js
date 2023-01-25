const routes = require('./routes/routes');

const express = require('express');
const hbs = require('hbs');
var bodyParser = require('body-parser')

const app = express();
const PORT = 3000;


hbs.registerPartials( './views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set("views",  "server/views");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('./public'));

app.use(routes);

app.listen(PORT, () => console.log('El puerto esta corriendo en el puerto : ' + PORT));     