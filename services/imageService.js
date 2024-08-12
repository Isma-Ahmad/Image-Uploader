const { Image } = require('../models/index');
const multer = require('multer');
const path = require('path');
const fs = require('fs');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });


const uploadImageMiddleware = (req, res, next) => {
    upload.single('image')(req, res, (err) => {
        if (err) return next(err);
        next();
    });
};


const saveImage = async (imagePath) => {
    try {
        const image = await Image.create({ image: imagePath });
        return image;
    } catch (error) {
        throw new Error('Error saving image to the database');
    }
};


const getImageById = async (id) => {

        const image = await Image.findByPk(id);
        if (!image) throw new Error('Image not found');
        return image;

};



const deleteImage = async (id) => {
  
        const image = await Image.findByPk(id);
        if (!image) throw new Error('Image not found');
        await image.destroy(); 
   
};

module.exports = { 
    uploadImageMiddleware,
    saveImage,
    getImageById,
    deleteImage 
};
