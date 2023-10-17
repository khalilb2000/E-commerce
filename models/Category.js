const { Model, DataType } = require("sequalize");

const sequalize = require("../config/connection.js");

class Category extends Model {}

Category.init(
  {
    //define 'id' column
    id:{
      type:DataTypes.INTGER, // setting Data type to INTEGER
      allowNull: false, // Disallow NULL values
      primaryKey: true, // Set as primary key 
      autoIncrement: true, // Automatically increment the value for new redord
    },
    //Define 'category_name' column 
    category_name: {
      type: DataTypes.STRING, // Set to STRING data type
    },
  },
  {
    sequalize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }

);


module.exports = Category;