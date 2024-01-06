const User = require('../model/User');
const bcrypt = require('bcrypt');
const expressAsyncHandler = require('express-async-handler')
const generateToken = require("../config/generateToken");
const jwt = require("jsonwebtoken");

const registerUser = expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({
            where: { email }
        });
        if (existingUser) return res.json("user already exist");

        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        await User.create({
            name,
            email,
            password: hashPassword
        });
        res.json("registration succesfull");
    } catch (error) {
        res.json(error);
    }
})

const loginUser = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            where: { email }
        });
        if (!user) return res.json("user not exit");
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.json("Invalid Password")
        } else {
            const token = generateToken(user.id);
            res.cookie("token", token).json({
                id: user.id,
                name: user.name,
                email: user.email,
                token
            })
        }
    } catch (error) {
        res.json(error)
    }

});

const fetchUser = expressAsyncHandler((req,res) =>{
    const {token} = req.cookies;
    if(!token){
        return res.status(401).json({message : "Unauthorized : Missing token"});
    }
    jwt.verify(token , process.env.JWT_KEY , async(err, userData)=>{
        if(err){
            return res.status(403).json({message : "Forbidden : Invalid token"})
        }
        const user = await User.findByPk(userData.id);
        if(user){
            user.password = undefined;
        req.user = user;
        res.json(user);
        }else{
            res.status(404).json({message:"User not found"});
        }
    })
})

const logout = expressAsyncHandler((req, res) => {
    res.cookie('token', '').json("done");
})

module.exports = {
    registerUser,
    loginUser,
    fetchUser,
    logout
}