const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      allowNull : false,
      primaryKey: true,
      autoIncrement:true
    },
    //define a catagory_name column
    catagory_name: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[1],
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
