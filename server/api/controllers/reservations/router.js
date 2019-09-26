import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .get('/', function (req, res) {
    res.send('Oopsie! there is nothing here, stop snooping around')
  })
  .get('/:phoneNumber', controller.get)
  .delete('/:phoneNumber/:time', controller.delete)
  .post('/', controller.create);
  
