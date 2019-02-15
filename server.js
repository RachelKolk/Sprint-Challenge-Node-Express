const express = require('express');

const server = express();

const projectRouter = require('./project/project-router.js');
const actionRouter = require('./action/action-router.js')

server.use(express.json());

server.use('/projects', projectRouter);
server.use('/actions', actionRouter);

server.get('/', (req, res) => {
    res.send(`<h1>Hello, from Node Express Sprint Challenge!</h1>`);
});

module.exports = server;