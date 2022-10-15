const mongodb = require('../DB/connect');
const ObjectId = require('mongodb').ObjectId;

//a getAll function that gets all data in contacts collection
const getAll = async (req, res, next) => {
    const result = await mongodb.getDB().db('node_demo').collection('contacts').find();
    result.toArray().then((listings) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(listings);
    });
};

//a getOne function that gets one row based on ID
const getOne = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDB().db('node_demo').collection('contacts').find({_id: userId});
    result.toArray().then((listings) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(listings[0]);
    });
};

//a postContact function that creates a contact object in the collection
const postContact = async (req, res) => {
    const contact = {
        fName: req.body.fName,
        lName: req.body.lName,
        email: req.body.email,
        favColor: req.body.favColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDB().db('node_demo').collection('contacts').insertOne(contact);
    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || 'There was an error when creating the contact.');
    }
};

//an updateContact function that will update based on id
const updateContact = async (req, res) => {
    const userID = new ObjectId(req.params.id);
    const contact = {
        fName: req.body.fName,
        lName: req.body.lName,
        email: req.body.email,
        favColor: req.body.favColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDB().db('node_demo').collection('contacts').replaceOne({_id: userID}, contact);
    console.log(response);
    if(response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'An error occurred when updating contact.');
    }
};

//a delContact function that deletes based on id
const delContact = async (req, res) => {
    const userID = new ObjectId(req.params.id);
    const response = await mongodb.getDB().db('node_demo').collection('contacts').deleteOne({_id: userID}, true);
    console.log(response);
    if (response.deletedCount > 0) {
        res.status(200).send();
    } else {
        res.status(500).json(response.error || 'An error occurred when deleting contact.');
    }
};

module.exports = {getAll, getOne, postContact, updateContact, delContact};