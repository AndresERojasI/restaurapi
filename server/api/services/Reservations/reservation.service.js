import l from '../../../common/logger';
import database from '../../../common/database'

class ReservationService {
    createReservation(reservation) {
        l.info(`${this.constructor.name}.createReservation()`);
        return database.collection('reservations').doc(reservation.phoneNumber).set(reservation)
    }

    getReservation(phoneNumber) {
        l.info(`${this.constructor.name}.createReservation()`);
        return database.collection('reservations').doc(phoneNumber).get()
    }

    cancelReservation(phoneNumber) {
        l.info(`${this.constructor.name}.createReservation()`);
        return database.collection('reservations').where('phoneNumber', '==', phoneNumber).get()
    }
}

export default new ReservationService();