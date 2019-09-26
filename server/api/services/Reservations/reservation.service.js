import l from '../../../common/logger';
import database from '../../../common/database'

class ReservationService {
    createReservation(reservation) {
        l.info(`${this.constructor.name}.createReservation()`);
        return database.collection('reservations').doc(`${reservation.phoneNumber}_${reservation.time}`).set(reservation)
    }

    getReservation(phoneNumber) {
        l.info(`${this.constructor.name}.createReservation()`);
        return database.collection('reservations').where('phoneNumber', '==', phoneNumber).get()
    }

    cancelReservation(phoneNumber) {
        l.info(`${this.constructor.name}.createReservation()`);
        return database.collection('reservations').where('phoneNumber', '==', phoneNumber).get()
    }
}

export default new ReservationService();