module.exports = (sequelize, DataTypes, Model) => {
    class Institute extends Model {}

    Institute.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        affiliated: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.STRING
        },
        pincode: {
            type: DataTypes.INTEGER
        },
        phone: {
            type: DataTypes.BIGINT  ,
        },
    }, {
        freezeTableName: true,
        modelName: 'Institute',
        sequelize,
    });

    return Institute;
}
