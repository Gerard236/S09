const express = require('express');
const app = express();
const connect = require(`./database/connect`);
app.use(express.json());

connect.createConnection();
const myController = require('./controller/controllerJoi');

// EX1
// ruta: http://localhost:3000/api/v2/ex2/


app.use('/api/v1/ex1', require('./routes/rutesJoi.js'));


