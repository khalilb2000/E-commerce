// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Categories have many Products
Product.belongsToMany(Product, {
  through: ProductTag, // intermediate model
  foreignKey: 'product_id', // foreign key in Product Model
})
// Products belongToMany Tags (through ProductTag)
Tag.belongsToMany(Product,{
  through: ProductTag, 
  foreignKey: 'tag_id',
})
// Tags belongToMany Products (through ProductTag)
Category.hasMany(Product,{
  foreignKey: 'category_id', // ' category_id' foreignKey in Model
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
