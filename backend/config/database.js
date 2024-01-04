const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize({
    dialect : 'mysql',
    host : process.env.DB_HOST || 'localhost',
    user : process.env.DB_USER || 'root',
    password : process.env.DB_PASSWORD || "" ,
    database : process.env.DB_NAME || "pme",
    pool :{
        min : 0,
        max : 10,
        acquire : 3000,
        idle : 10000
    }
})

module.exports = sequelize;