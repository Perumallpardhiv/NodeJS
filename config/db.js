const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://TaskManager:kU0EKeBWk21z5Tc6@cluster0.fi9sof5.mongodb.net/?retryWrites=true&w=majority').on('open',()=>{
    console.log("MongoDb Connected");
}).on('error',()=>{
    console.log("MongoDb Connection error");
});

module.exports = connection;
