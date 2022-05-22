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

module.exports.getOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => console.log(err));
}

module.exports.updateOneProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id}, req.body, {new: true, runValidators: true})
        .then( updateProduct => res.json(updateProduct))
        .catch(err => console.log(err));
}

module.exports.deleteOneProduct = (req, res) => {
    Product.findOneAndDelete({ _id: req.params.id})
        .then( deleteProduct => res.json(deleteProduct))
        .catch(err => console.log(err));
}
