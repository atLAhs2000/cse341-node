const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Alyssa Lahoy');
});

module.exports = routes;