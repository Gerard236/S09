const express = require(`express`);
const router = express.Router();
const {createUser} = require('../controller/controllerJoi');
const joiSchemaValidation = require('../midelware/midelJoi.js');
const {createUserSchema} = require('../models/joi/userSchema.js');
router.post(`/`,
joiSchemaValidation.validate(createUserSchema, `body`),
createUser);
module.exports = router;