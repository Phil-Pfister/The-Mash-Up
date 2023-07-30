const db = require('../config/connection');
const { User, Product, Category } = require('../models');
const userSeeds = require('./userSeeds.json');
const productSeeds = require('./productSeeds.json');
const categorySeeds = require('./categorySeeds.json');

db.once('open', async () => {
  try {
    await Product.deleteMany({});
    await User.deleteMany({});
    await Category.deleteMany({});

    await User.create(userSeeds);
    

    for (let i = 0; i < productSeeds.length; i++) {
      const { _id, seller } = await Product.create(productSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: seller },
        {
          $addToSet: {
            products: _id,
          },
        }
      );
    }
    for (let i = 0; i < categorySeeds.length; i++) {
      const { _id, category } = await Category.create(categorySeeds[i]);
      const product = await Product.findOneAndUpdate(
        { category: category },
        {
          $addToSet: {
            category: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
