const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  try {
    const products = await Product.findAll({
      include: [{ model: Category }, { model: Tag }],
    });
  } catch (error) {
    res.status(500).json[{ message: 'Product not found!'}]
  }
  // be sure to include its associated Category and Tag data
});

// get one product
router.get('/:id',async (req, res) => {
  // find a single product by its `id`
 try {
  const product = await Product.findbyPk(req.params.id,{
    include: [{ model: Category} ,{ model: Tag }],
  });
  !product
  ? res.status(404).json({ message: "Product not found!"})
  : res.status(200).json(product);
 } catch (error) {
  res.status(500).json({ message: "Product not found!" })
 }
  // be sure to include its associated Category and Tag data
});

// create new product
router.post('/', (req, res) => {
  Product.create(req.body)
    .then((product) => {
      if (req.body.tagIds.length) {
        const productTagIds = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIds);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product
router.put('/:id', async (req, res) => {
  // update product data
  try {
    await Product.update(req.body, {where: { id: req.params.id} });
     // Check if req.body.tags exists w appropriate length
    if ( req.body.tags && req.body.length > 0) {}
    //retrieve product tags and ids.
    const productTags = await ProductTag.findAll({ where: { product_id: req.params.id} });
    const productTagIds = productTags.map(({ tag_id }) => tag_id);
    
    //filter new products
    const newProductTags = req.body.tags
    .filter((tag_id) => !productTagIds.includes(tag_id))
    .map((tag_id) => {
      return {
        product_id: req.params.id,
        tag_id,
      };
    });

    //filter product tags to remove
    const productTagsToRemove = productTags
    .filter(({ tag_id }) => !req.body.tags.includes(tag_id))
    .map(({ id }) => id);

    await Promise.all([
      ProductTag.destroy({ where: { id: productTagsToRemove } }),
      ProductTag.bulkCreate(newProductTags),
    ]);

    //Respond with updated prod.
    const product = await Product.findByPk(req.params.id, { include: [{ models: Tag }] });
    return res.json(product);
  } catch (error) {
    console.log(error)
    return res.status(500).json(error);
  }
});

//here we will delete product id

router.delete('/:id',async (req, res) => {
  // delete one product by its `id` value
try {
  //delete product w matching id
  const deleted = await Product.destroy({ where: { id: req.params.id} });
  //if not found return404 error
  !deleted
  ? res.status(404).json({deleted})
  : res.status(200).json(deleted);
} catch (error) {
  res.status(500).json({ message: "Product not deleted", error: err });
}
});

module.exports = router;
