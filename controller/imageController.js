const imageService = require('../services/imageService');


const uploadImage = async (req, res) => {
    try {
        const filePath = req.file.path;
        if (!filePath) {
            throw new Error('No image uploaded');
        }
        const image = await imageService.uploadImage(filePath);
        res.json({
            message: 'Image uploaded successfully!',
            dbRecord: image
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getImageById = async (req, res) => {
    try {
        const id = req.params.id;
        const image = await imageService.getImageById(id);
        const imageData = image.image;
        res.setHeader('Content-Type', 'image/jpeg'); 
        res.send(imageData); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    uploadImage,
    getImageById
};
