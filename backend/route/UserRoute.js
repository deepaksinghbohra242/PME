const express = require('express');
const {
    registerUser,
    loginUser,
    fetchUser,
    logout
} = require('../controller/UserCtrl')
const userRouter = express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/fetchByToken' ,fetchUser);
userRouter.post('/logout',logout)
module.exports = userRouter;