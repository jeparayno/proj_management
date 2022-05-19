const Product = require('../models/management.model');

module.exports.index = (req, res) => {
    res.json({
        message: "You are ready to be connected"
    });
}

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err));
} 

module.exports.getAllProduct = (req, res) => {
    Product.find()
        .then(findAllProduct => res.json(findAllProduct))
        .catch(err => res.json(err));
} 