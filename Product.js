// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id:{
      type:DataTypes.INTGER, // setting Data type to INTEGER
      allowNull: false, // Disallow NULL values
      primaryKey: true, // Set as primary key 
      autoIncrement: true, // Automatically increment the value for new redord
    },
    product_name: {
      type: DataTypes.STRING, //setting to string
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull:false,
      validate: {
        isDecimal: true, // validating that value is a decimal
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue: 10,
      validate: {
        isNumeric: true, //making sure value is numeric
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
      }
    },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
