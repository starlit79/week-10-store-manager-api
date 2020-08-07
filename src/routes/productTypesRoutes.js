
const router = require('express').Router();
const {deleteProductType, updateProductType, createProductType, getProductTypes} = require('../database/productTypes');

router.get('/', async (req, res) => {
  res.send(await getProductTypes());
});

router.post('/', async (apiRequest, apiResponse) => {
  const newProductType = apiRequest.body;
  await createProductType(newProductType);
  apiResponse.send({
    message: 'New productType created.', 
    allProductTypes: await getProductTypes(),
  })
})

router.put('/:id', async (apiRequest, apiResponse) => {
  const updatedProductType = apiRequest.body;
  console.log({ updatedProductType })
  await updateProductType(apiRequest.params.id, updatedProductType);
  apiResponse.send({ message: 'ProductType updated.' });
});

router.delete('/:productTypeId', async (apiRequest, apiResponse) => {
  await deleteProductType(apiRequest.params.productTypeId);
  apiResponse.send({ message: 'ProductType deleted.' });
});

module.exports = router;
