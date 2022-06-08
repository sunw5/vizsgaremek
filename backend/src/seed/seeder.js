const fsp = require('fs').promises;
const { join } = require('path');
const ProductModel = require('../models/product.model');

(async () => {
  try {

    // Product
    const data = await fsp.readFile(join(__dirname, 'product.json'), 'utf8');    
    const product = JSON.parse(data);
    await ProductModel.insertMany(product);
    console.log('Successfully seeded database with products');

  } catch (error) {
    console.error(error);
  }
}
)();