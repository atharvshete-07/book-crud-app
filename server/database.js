const mongoose = require('mongoose');

const databaseconnection = async () => {
  await mongoose.connect('mongodb://root1:root1@ac-ie841rv-shard-00-00.zps8lo6.mongodb.net:27017,ac-ie841rv-shard-00-01.zps8lo6.mongodb.net:27017,ac-ie841rv-shard-00-02.zps8lo6.mongodb.net:27017/books?ssl=true&replicaSet=atlas-ghwrn9-shard-0&authSource=admin&appName=Atharv')
    .then(() => {
      console.log('Connected to the database');
    })
    .catch((error) => {
      console.error('Error connecting to the database:', error);
    });
};

module.exports = databaseconnection;

