const express = require('express');
const router = express.Router();
const { uploadImage, getImage, deleteImageById } = require('../controller/imageController');


router.post('/upload', uploadImage);


router.get('/images/:id', getImage);

router.delete('/:id', deleteImageById);

module.exports = router;
