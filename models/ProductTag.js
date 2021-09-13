const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    //define product id colu,n
    product_id: {
      type: DataTypes.INTEGER,
      //Ref the products model id
      references: {
        model: 'product',
        key: 'id'
      }
    },
    //defines tag_id column
    tag_id: {
      type: DataTypes.INTEGER,
      //references the tag model's id
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
