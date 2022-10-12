const mongodb = require('../DB/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
    const result = await mongodb.getDB().db('node_demo').collection('contacts').find();
    result.toArray().then((listings) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(listings);
    });
};

const getOne = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDB().db('node_demo').collection('contacts').find({_id: userId});
    result.toArray().then((listings) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(listings[0]);
    });
};

module.exports = {getAll, getOne};