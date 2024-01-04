const {Sequelize } = require('sequelize');
const sequelize = require('../config/database');

const { DataTypes} = Sequelize;

const User = sequelize.define('users' , {
    name : {
        type:DataTypes.STRING,
        allowNull:false
    },
    email : {
        type:DataTypes.STRING,
        unique:true,
        allowNull:false,
        validate : {
            isEmail : true
        }
    },
    password : {
        type:DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
},{
    freezeTableName : true,
    timestamps : true
});

(async()=>{
    await sequelize.sync(); 
})();

module.exports=User;