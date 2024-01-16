module.exports = (sequelize , DataTypes ,Model)=>{
    class Student extends Model{}

    Student.init({
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        id :{
            type : DataTypes.INTEGER,
            primaryKey : true,
        },
        father_name :{
            type : DataTypes.STRING,
            allowNull : false
        },
        mother_name :{
            type : DataTypes.STRING,
            allowNull : false
        },
        date_of_birth : {
            type : DataTypes.DATE,
            allowNull : false
        },
        address :{
            type : DataTypes.STRING,
            allowNull : false
        },
        contact :{
            type:DataTypes.BIGINT,
        },
        character : {
            type : DataTypes.STRING,
        }
    },{
        sequelize,
        modelName : 'Student',
        freezeTableName : true
    })
    return Student
}