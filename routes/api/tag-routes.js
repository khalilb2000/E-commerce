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
    con
  } catch (error) {
    
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
