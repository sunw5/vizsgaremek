const fsp = require('fs').promises;
const { join } = require('path');
const product = require('../models/product.model');
const customer = require('../models/customer.model');
const user = require('../models/user.model');
const order = require('../models/order.model');
const address = require('../models/address.model');

const modelsToSeed = [address];

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
      } else if (model.modelName.toLowerCase() === 'order') {
        let customerIds = await customer.find({}).select({ _id: 1 });
        customerIds = customerIds.map((customer) => customer._id.toString());
        let productIds = await product.find({}).select({ _id: 1 });
        productIds = productIds.map((product) => product._id.toString());

        parsedData.forEach((order) => {
          order.customerId =
            customerIds[Math.floor(Math.random() * customerIds.length)];
          order.productId =
            productIds[Math.floor(Math.random() * productIds.length)];
        });

        await model.insertMany(parsedData);
      }
      else {
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
