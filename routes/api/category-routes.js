const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // Find all categories and include associated Products
  Category.findAll({ include: Product })
    .then(categories => res.json(categories))
    .catch(error => res.status(500).json(error));
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id, { include: Product })
  .then(category => {
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }
    res.json(category);
  })
  .catch(error => res.status(500).json(error));
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then(category => res.status(201).json(category))
  .catch(error => res.status(500).json(error));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.findByPk(req.params.id)
  .then(category => {
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }
    return category.update(req.body);
  })
  .then(category => res.json(category))
  .catch(error => res.status(500).json(error));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.findByPk(req.params.id)
    .then(category => {
      if (!category) {
        res.status(404).json({ message: 'Category not found' });
        return;
      }
      return category.destroy();
    })
    .then(() => res.json({ message: 'Category deleted successfully' }))
    .catch(error => res.status(500).json(error));
});

module.exports = router;
