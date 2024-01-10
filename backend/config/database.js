const { Sequelize ,DataTypes , Model} = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize({
    dialect : 'mysql',
    logging : false ,
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

const db = {};
db.Sequelize= Sequelize;
db.sequelize = sequelize; 
db.users = require('../model/User')(sequelize , DataTypes ,Model);
db.institute = require('../model/Institute')(sequelize,DataTypes,Model);

db.sequelize.sync();
module.exports = db;