const router = require('express').Router();
const multer = require('multer');
const productController = require('./controller');


router.get('/', productController.index);
router.get('/:id', productController.view);
router.post('/', productController.post);
router.put('/:id', productController.update);
router.delete('/:id', productController.destroy);

module.exports = router; 