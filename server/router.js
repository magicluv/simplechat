/**
 * module dependencies for routes configuration
 */
const path = require('path');
const express = require('express');

const routesConfig = (app) => {
    // connect static files
    const publicPath = path.resolve(__dirname, '../client/public');
    app.use(express.static(publicPath));

    // app.get('/', (req, res) => res.send('Hello app!'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/views', 'index.html'));
    });
}

module.exports = routesConfig;