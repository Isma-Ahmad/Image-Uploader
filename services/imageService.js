const { Image } = require('../models/index');
const fs = require('fs');

const uploadImage = async (filePath) => {

        
        const imageData = fs.readFileSync(filePath);
        if (!imageData) {
            throw new Error('Failed to read image file');
        }
       
        const image = await Image.create({ image: imageData });
        return image;
   
};

const getImageById = async (id) => {

        const image = await Image.findByPk(id);
        if (!image) {
            throw new Error('Image not found');
        }
        return image;
   
};

const deleteImageById = async (id) => {

        const image = await Image.findByPk(id);
        if (!image) {
            throw new Error('Image not found');
        }
        await image.destroy();
        return { message: 'Image deleted successfully' };

};


module.exports = {
    uploadImage,
    getImageById,
    deleteImageById
};
