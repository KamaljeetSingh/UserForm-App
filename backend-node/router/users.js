const express = require("express");
const router = express.Router();
const UserController = require('../controllers/users');
const phoneValidator = require('../middlewares/phone-validation');

router.post("/submit", phoneValidator, UserController.saveForm);

module.exports = router;