const express = require('express');
const cors = require('cors');
// importing the body parser
const bodyParser = require('body-parser');


const feedRoutes = require('./routes/feed');

// Getting the db connection
const db = require('./database/database');

// Stating the express.js framework 
const app = express();

// Setting up the cors policy

app.use(cors());
// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
// Package used for reading the json content send using the html form
app.use(bodyParser.json()); // application/json

// Setting the head for the response which is send
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Setting the routes for the further routing
app.use('/feed', feedRoutes);

// We started the server
app.listen(8080);