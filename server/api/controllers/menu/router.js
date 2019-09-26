import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .get('/', function (req, res) {
    res.send('Oopsie! there is nothing here, stop snooping around')
  })
  .get('/drinks', controller.drinks)
  .get('/appetizers', controller.drinks)
  .get('/specials', controller.specials);
