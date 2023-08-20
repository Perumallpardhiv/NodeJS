const UserModel = require('../model/user_model');
const jwt = require('jsonwebtoken');

class UserService {
    static async registerUser(name) {
        try {
            console.log(`name: ${name}`);
            const createUser = new UserModel({name});
            return await createUser.save();
        } catch (e) {
            throw e;
        }
    }

    static async checkUser(name){
        try {
            return await UserModel.findOne({name});
        } catch (e) {
            throw e;
        }
    }

    static async generateToken(tokenData, secretKey, jwt_expire){
        return jwt.sign(tokenData, secretKey, {expiresIn: jwt_expire});
    }
}

module.exports = UserService;
