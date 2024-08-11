const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize('image_uploader', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
});


const Image = sequelize.define('Images', {
    image: {
        type: DataTypes.BLOB,
        allowNull: false
    }
},
{timestamps:true}
);

module.exports = {
    sequelize,
    Image
};
