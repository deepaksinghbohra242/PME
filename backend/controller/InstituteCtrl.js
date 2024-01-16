const db = require('../config/database');
const expressAsyncHandler = require('express-async-handler')
var bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

const Institute = db.institute;

const registerInstitute = expressAsyncHandler(async(req ,res)=>{
    const {name ,email,password ,affiliated , address , city,state,pincode,phone} = req.body;
    try {
        const existingInst = await Institute.findOne({where : {email}});
        if(existingInst) throw new Error("user already exist");
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password,salt);
        const inst = await Institute.create({
            name,
            email,
            password : hashPassword,
            affiliated,
            address,
            city,
            state,
            pincode,
            phone
        });
        res.status(201).json({msg:"User created" , data : inst })
    } catch (error) {
        console.log(error);
        throw new Error("failed");
    }
})

module.exports = {
    registerInstitute,
}