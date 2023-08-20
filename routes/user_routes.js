const router = require("express").Router();
const UserController = require('../controller/user_controller');

router.post('/registerLogin', UserController.registerLogin);

module.exports = router;
