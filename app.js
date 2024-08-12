const express = require('express');
const app = express();
const PORT = 2000;
const { sequelize } = require('./models/index'); 
const imageRoutes = require('./routes/imageRoutes');
const path = require('path');

app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/', imageRoutes);

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Unable to connect to the database:', error);
    });


// app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`));