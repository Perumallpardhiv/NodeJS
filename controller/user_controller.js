const UserService = require('../services/user_services');

exports.registerLogin = async(req,res,next)=>{
    try {
        const {name} = req.body;
        const user = await UserService.checkUser(name);
        
        if(!user){
            const successReg = await UserService.registerUser(name);
            let tokenData = { _id: successReg._id, name: successReg.name };
            const token = await UserService.generateToken(tokenData, "secretKey", '24h');
            res.json({status:true, process: "register", success:"Welcome to Task Manager", token: token});
            console.log("Registered Successfully");
        } else {
            let tokenData = { _id: user._id, name: user.name };
            const token = await UserService.generateToken(tokenData, "secretKey", '24h');
            res.json({status:true, process: "login", success:`Welcome Back ${name}`, token: token});
            console.log("Logged In Successfully");
        }
    } catch (er) {
        res.json({status:false, success: `Error ${er.status}`});
        console.log("Error 404");
        console.log(er.status);
    }
}
