/**
 * This is a simple express REST API server.
 */
const express = require('express');
const app = express();
const port = 3000;

/**
 * Main routes
 */
app.get('/', (req, res) => {
    res.status('200').json({ status: 'running' });
});

app.get('/hello', (req, res) => {
    console.log('World');
    res.status('200').json({ answer: 'World' });
});

/**
 * Default error route
 */
app.use('*', (req, res, next) => {
    res.status(404).send({
        error: 'Not Found',
        method: req.method,
        status: 404,
        url: req.baseUrl,
    });
});

/**
 * Start server
 */
app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
});