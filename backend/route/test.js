const express = require('express');
const {
    test
} = require('../controller/testctrl');

const userRoute = express.Router();

userRoute.get('/test' , test);

module.exports = userRoute;