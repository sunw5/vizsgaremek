const fsp = require('fs').promises;
const { join } = require('path');
const product = require('../models/product.model');
const customer = require('../models/customer.model');
const user = require('../models/user.model');

const modelsToSeed = [product];

const seed = async () => {
  for (const model of modelsToSeed) {
    try {
      // const dropResult = await conn.connection.db.dropCollection('products');
      const dropResult = await model.collection.drop();

      const data = await fsp.readFile(
        join(__dirname, `${model.modelName.toLowerCase()}.json`),
        'utf8'
      );
      const parsedData = JSON.parse(data);
      
      if (model.modelName.toLowerCase() === 'user') {
        for (const userobj of parsedData) {
          const usermodel = new model(userobj);
          await usermodel.save();
        }
      } else {
        await model.insertMany(parsedData);
      }
      console.log(
        `Successfully seeded database with ${model.modelName.toLowerCase()}`
      );
    } catch (error) {
      console.error(error);
    }
  }
};

module.exports = seed;
