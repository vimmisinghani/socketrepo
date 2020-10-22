let app = null;

const express = require('express');
var ejs = require('ejs');

app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '25mb', extended: true, type: 'application/json' }));

app.set('views', './') // specify the views directory
app.set('view engine', 'html') // register the template engine
app.engine('html', ejs.renderFile);

app.Promise = global.Promise;
module.exports = app;
