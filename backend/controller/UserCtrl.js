const User = require('../model/User');
const bcrypt = require('bcrypt');
const expressAsyncHandler = require('express-async-handler')
const generateToken = require("../config/generateToken");

const RegisterUser = expressAsyncHandler(async (req, res) => {
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

const LoginUser = expressAsyncHandler(async (req, res) => {
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

})

module.exports = {
    RegisterUser,
    LoginUser
}