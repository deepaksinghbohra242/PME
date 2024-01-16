// UserRole.js
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {}

  UserRole.init(
    {
      Role: {
        type: DataTypes.ENUM('Student', 'Teacher', 'Admin'),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'UserRole',
      freezeTableName: true,
    }
  );

  return UserRole;
};
