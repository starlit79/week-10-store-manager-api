
const router = require('express').Router();
const {deleteCategory, updateCategory, createCategory, getCategories} = require('../database/categories');

router.get('/', async (req, res) => {
  res.send(await getCategories());
});

router.post('/', async (apiRequest, apiResponse) => {
  const newCategory = apiRequest.body;
  await createCategory(newCategory);
  apiResponse.send({
    message: 'New Category created.', 
    allCategories: await getCategories(),
  })
})

router.put('/:id', async (apiRequest, apiResponse) => {
  const updatedCategory = apiRequest.body;
  console.log({ updatedCategory })
  await updateCategory(apiRequest.params.id, updatedCategory);
  apiResponse.send({ message: 'Category updated.' });
});

router.delete('/:categoryId', async (apiRequest, apiResponse) => {
  await deleteCategory(apiRequest.params.categoryId);
  apiResponse.send({ message: 'Category deleted.' });
});

module.exports = router;
