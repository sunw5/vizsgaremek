const app = require('./server');
const mongoose = require('mongoose');
const supertest = require('supertest');
const superagent = require('superagent');
const config = require('config');
const Product = require('./models/product.model');
const { response } = require('jest-mock-req-res');
const { Test } = require('supertest');

describe('REST API integration tests', () => {
  const insertData = [
    {
      'Magyar név': 'Páfrányfenyő',
      'Latin név': 'Ginkgo Biloba',
      Ár: 5,
      Elérhető: false,
      Fényigény: 'napos',
      Tenyészidő: 'évelő',
      Talajigény: 'normál',
      Habitus: 'fásszárú',
      'Teljes magasság': '1ö - 12 m',
      Kiszerelés: '5l konténer',
      'Virágzás ideje': null,
      'Virág színe': null,
      Egyéb: 'lombhullató, fagytűtő, hímivarú növényt küldünk, ősszel sárgul',
    },
    {
      'Magyar név': 'Mezei Juhar',
      'Latin név': 'Acer Campestre',
      Ár: 5,
      Elérhető: false,
      Fényigény: 'napos',
      Tenyészidő: 'évelő',
      Talajigény: 'vályog, meszes',
      Habitus: 'fásszárú',
      'Teljes magasság': '15 m',
      Kiszerelés: '5l konténer',
      'Virágzás ideje': 'IV',
      'Virág színe': null,
      Egyéb: 'lombhullató, fagytűtő, ősszel sárgul',
    },
  ];

  let lastAccessToken = '';

  beforeEach((done) => {
    const { host, user, pass } = config.get('database');
    mongoose
      .connect(`mongodb+srv://${host}`, {
        user,
        pass,
      })
      .then((conn) => {
        console.log('Connection to test database success!');
        done();
      })
      .catch((err) => {
        throw new Error(err.message);
      });

    superagent
      .post('http://localhost:3000/login')
      .send({
        email: 'johndoe@gmail.com',
        password:
          '$2b$10$UYTZmcENQ1dM5zX3aurmOOIPDY.KW3K04sVVWR4qaBAoCahtCqlZO',
      })
      .set('Content-Type', `application/json`)
      .set('accept', 'json')
      .end((err, res) => {
        if (err) {
          //   logger.error(err);
          console.log(err);
          return done();
        }
        lastAccessToken = res.body.accessToken;
        done();
      });
  });

  afterEach((done) => {
    mongoose.connection.close(() => done());
  }); 

  test('GET /product', async () => {
    try {
      await Product.insertMany(insertData);
      const response = await supertest(app)
        .get('/product')
        .set('authorization', `Bearer ${lastAccessToken}`);
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toEqual(insertData.length);

      response.body.forEach((product, index) => {
        expect(product['Magyar név']).toBe(insertData[index]['Magyar név']);
      });
      const deletedProducts = await Product.deleteMany({}).exec();
      console.log('deletedProducts', deletedProducts);
      
    } catch (err) {
      throw new Error(err);
    }
  });  
  
});
