
const router = require('express').Router();
const {deleteLogo, updateLogo, createLogo, getLogos} = require('../database/logos');
const { getProducts } = require('../database/products');

router.get('/', async (req, res) => {
  res.send(await getLogos());
});

router.post('/', async (apiRequest, apiResponse) => {
  const newLogo = apiRequest.body;
  await createLogo(newLogo);
  apiResponse.send({
    message: 'New logo created.', 
    allProducts: await getProducts(),
  })
})

router.put('/:id', async (apiRequest, apiResponse) => {
  const updatedLogo = apiRequest.body;
  console.log({ updatedLogo})
  await updateLogo(apiRequest.params.id, updatedLogo);
  apiResponse.send({ message: 'Logo updated.' });
});

router.delete('/:productId', async (apiRequest, apiResponse) => {
  const updatedLogo(apiRequest.params.id, updatedLogo);
  apiResponse.send({ message: 'Logo updated.'});
})

module.exports = router;
