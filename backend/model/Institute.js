const { institute } = require("../config/database");

module.exports = (sequelize , DataTypes , Model) =>{
    class Institute extends Model {}

    Institute.init({
        name : {
            type: DataTypes.STRING,
            allowNull : false
        },
        email : {
            type : DataTypes.STRING,
            unique : true,
            allowNull : false,
            validate :{
                isEmail :true
            }
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false,
        }
    },{
        freezeTableName : true,
        modelName : 'Institute',
        sequelize,
    });

    return Institute;
}