import menuRouter from './api/controllers/menu/router';
import reservationRouter from './api/controllers/reservations/router'

export default function routes(app) {
  app.use('/api/v1/menu', menuRouter);
  app.use('/api/v1/reservations', reservationRouter);
}
