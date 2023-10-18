const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
  } catch (error) {
    res.status(500).json({ message: 'Tags not found!' });
  }
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagData = await Tag.findByPk(req.params.id, { 
      include: [{ model: Product }],
    });
    if(!tagData) {
      res.status(404).json({ message: "No tag found with this ID." });
      return;
    }
    res.status(200).json(tagData);
  } catch (error) {
  res.status(500).json({ messages: "Tag not found" })
  }
  // be sure to include its associated Product data
});

router.post('/',async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (error) {
    res.status(400).json({ message: 'Tag creation failed' });
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const update = await Tag.update(req.body, {
      where: { id: req.params.id },
   });
   !updated[0]
   ? res.status(404).json({ message: "No tag found with this id!"})
   :res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Tag updated failed' });
  }
});

router.delete('/:id',async (req, res) => {
  // delete on tag by its `id` value
  try {
    
  } catch (error) {
    
  }
});



module.exports = router;
