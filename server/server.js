require('dotenv-safe').config();

const db       = require('./database/IDatabase');
const database = new db( "/database.json" );
const express  = require('express');
const app      = express();
const cors     = require('cors');
const http     = require('http').Server(app);
const socketIO = require('socket.io')(http);

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.use("/coin", require('./routes/manageCoins') );


const port = 3000;

socketIO.on('connection', socket => {

    socket.emit('coins-data', database.currentData);

    console.log(`Server: client connected ${socket.id}`);
})

http.listen(port, () => {
    console.log(`Server: listening at port ${port}`);
})