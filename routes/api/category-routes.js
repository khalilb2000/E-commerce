const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({include: [{model: Product}]});
    res.status(200).json(categories);
} catch (err){
//handling erros by sending 500
res.status(500).json({message: 'not found!'});
}
});
  // find all categories
  
  // be sure to include its associated Products


router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try{
    const category = await Category.findByPk(req.params.id, { include: [{ model: Product}] });
  
 //if not found will return error 404
 if (!category) {
  res.status(404).json({ message: 'id not found' });
  return;
 }

 res.status(200).json(category);
} catch (err) {
  //handling errors by sending 500 status
  res.status(500).json({ message: 'not found!'});
}
});

router.post('/',async (req, res) => {
  // create a new category
  try {
    //creating a new category from data in req.
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    //400 status to handle errors
    res.status(400).json({ message: 'creation failed' });
  }
  });

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    //update category with matching ID using data req in body
    const updated = await Category.update(req.body, {where: { id: req.params.id}});
    //if no category found send out 404
    !updated[0] ? res.status(404).json({message:'id not found'}) : res.status(200).json(updated);
  }catch(err) {
    //handle errors by sending 500 with message
    res.status(500).json({ message: 'update failed' });
  }
  });

router.delete('/:id',async (req, res) => {
  // delete a category by its `id` value
 try {
  //delete category with matching ID
  const deleted = await Category.destroy({ where: { id: req.params.id } });
  //if category isnt found send 404
  //otherwise create data
  !deleted ? res.status(404).json({ message: 'id not found' }) : res.status(200).json(deleted);
 } catch (error) {
  res.status(500).json(err)
 }
 });

module.exports = router;
