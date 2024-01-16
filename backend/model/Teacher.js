module.exports = (sequelize , DataTypes ,Model)=>{
    class Teacher extends Model{}

    Teacher.init({
        name : {
            type : DataTypes.STRING,
            allowNull : false
        }
    },{
        sequelize,
        modelName : 'Student',
        freezeTableName : true
    })
    return Teacher
}
