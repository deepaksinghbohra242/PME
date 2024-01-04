const express = require('express');
const {
    RegisterUser,
    LoginUser
} = require('../controller/UserCtrl')
const userRouter = express.Router();

userRouter.post('/register',RegisterUser);
userRouter.post('/login', LoginUser);

module.exports = userRouter