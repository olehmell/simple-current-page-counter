const express = require('express');
const app = express();
const client = require('./database/connection')

const log = require('./logger')

client.connect()
    .then(() => {
        app.set('views', 'views');
        app.set('view engine', 'pug')
        const collection = client.db("counter").collection("users");
        const route = require('./routes');
        route(app, collection);
        const port = 3000;

        app.listen(port, () => {
            log.warn('We are live on ' + port);
        });
    })
    .catch(err => log.error(err))

module.exports = app;