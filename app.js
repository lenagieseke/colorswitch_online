// app.js

"use strict";

const express = require('express');
const socketio = require('socket.io');

const port = process.env.PORT || 3000;
const server = express()
                .use(express.static('public'))
                .listen(port, () => console.log(`Listening on ${port}`));

const io = socketio(server);
// const io = require('socket.io')(server);

io.on('connection', socket => 
{
    console.log('New client connected');

    socket.on('buttonPressed', data => 
    {
        socket.broadcast.emit('changeColor', data);

    });
});