const { Image } = require('../models/index');
const fs = require('fs');

const uploadImage = async (filePath) => {
    try {
        
        const imageData = fs.readFileSync(filePath);
        if (!imageData) {
            throw new Error('Failed to read image file');
        }
       
        const image = await Image.create({ image: imageData });
        return image;
    } catch (error) {
        throw new Error('Error uploading image: ' + error.message);
    }
};

const getImageById = async (id) => {
    try {
        const image = await Image.findByPk(id);
        if (!image) {
            throw new Error('Image not found');
        }
        return image;
    } catch (error) {
        throw new Error('Error retrieving image: ' + error.message);
    }
};

module.exports = {
    uploadImage,
    getImageById
};
