const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const db = require("../config/db");

const { Schema } = mongoose;

const userSchema = new Schema({
    name:{
        type:String,
        lowercase:true,
        required:true,
        unique:true,
    },
});

const UserModel = db.model('user', userSchema);

module.exports = UserModel;
