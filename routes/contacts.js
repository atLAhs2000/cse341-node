const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts-controller');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getOne);

router.post('/', contactsController.postContact);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.delContact);

module.exports = router;