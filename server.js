const express = require('express');

const server = express();

const projectRouter = require('./project/project-router.js');

server.use(express.json());

server.use('/projects', projectRouter);


server.get('/', (req, res) => {
    res.send(`<h1>Hello, from Node Express Sprint Challenge!</h1>`);
});

module.exports = server;