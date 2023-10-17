const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id:{
      type:DataTypes.INTGER, // setting Data type to INTEGER
      allowNull: false, // Disallow NULL values
      primaryKey: true, // Set as primary key 
      autoIncrement: true, // Automatically increment the value for new redord
    },
    tag_id: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      primaryKey:true,
      autoIncrement:true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product', //Reference the 'product' table
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
