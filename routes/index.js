const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Coco Lahoy');
});

module.exports = routes;