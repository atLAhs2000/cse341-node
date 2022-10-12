const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts-controller');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getOne);

module.exports = router;