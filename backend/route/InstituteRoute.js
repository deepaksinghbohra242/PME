const express = require('express');
const {
    registerInstitute
} = require('../controller/InstituteCtrl');

const instituteRouter = express.Router();

instituteRouter.post('/register',registerInstitute)

module.exports = instituteRouter;
