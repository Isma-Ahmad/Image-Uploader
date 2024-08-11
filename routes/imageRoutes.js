const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const imageController = require('../controller/imageController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), imageController.uploadImage);

router.get('/:id', imageController.getImageById);

router.delete('/:id', imageController.deleteImage);

module.exports = router;
