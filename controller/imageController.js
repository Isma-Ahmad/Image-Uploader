const imageService= require('../services/imageService');


const uploadImage = async (req, res) => {
  
imageService.uploadImageMiddleware(req, res, async (err) => {
            if (err) {
                return res.status(500).send('Error uploading image');
            }
                const imagePath = req.file.filename; 
                const image = await imageService.saveImage(imagePath); 
                res.status(200).json({ message: 'Image uploaded successfully', image });
           
        });
   
};


const getImage = async (req, res) => {
 
        const image = await imageService.getImageById(req.params.id);
        res.status(200).json(image);
   
};


const deleteImageById = async (req, res) => {
 
        await imageService.deleteImage(req.params.id);
        res.status(200).send('Image deleted successfully');
   
};

module.exports = { 
        uploadImage,
        getImage,
        deleteImageById 
};
