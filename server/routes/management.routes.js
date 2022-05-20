const ProductController = require('../controller/management.controller');

module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.post('/api/product', ProductController.createNewProduct);
    app.get('/api/getAllProd', ProductController.getAllProduct); 
    app.get('/api/getOneProd/:id', ProductController.getOneProduct);
    app.put('/api/updateOneProd/:id', ProductController.updateOneProduct);
}