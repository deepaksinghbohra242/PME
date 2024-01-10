module.exports = (sequelize ,DataTypes ,Model) =>{
    class User extends Model {}

    User.init({
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
        }
    },{
        freezeTableName : true,
        modelName : 'Users',
        sequelize,
    });

    return User;
}
