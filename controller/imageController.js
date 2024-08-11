const imageService = require('../services/imageService');


const uploadImage = async (req, res) => {
  
        const filePath = req.file.path;
        if (!filePath) {
            throw new Error('No image uploaded');
        }
        const image = await imageService.uploadImage(filePath);
        res.json({
            message: 'Image uploaded successfully!',
            dbRecord: image
        });
   
};

const getImageById = async (req, res) => {
 
        const id = req.params.id;
        const image = await imageService.getImageById(id);
        const imageData = image.image;
        res.setHeader('Content-Type', 'image/jpeg'); 
        res.send(imageData); 
   
};

const deleteImage = async (req, res) => {

        const id = req.params.id;
        const image = await imageService.deleteImageById(id);
        res.json({
            message: 'Image deleted successfully!',
            deletedImage: image
        });
   
};

module.exports = {
    uploadImage,
    getImageById,
    deleteImage
};
