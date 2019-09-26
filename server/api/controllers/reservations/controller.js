import ReservationService from '../../services/Reservations/reservation.service';
import l from '../../../common/logger';

export class Controller {
    create(req, res) {
        ReservationService.createReservation(req.body)
            .then(function(ref) {
                res.json({refId: ref.id});
            })
            .catch(function(error){
                l.error('error when trying to create a new reservation', error); 
                res.status(500).end();
            });
        res.send('done')
    }

    get(req, res) {
        ReservationService.getReservation(req.params.phoneNumber)
            .then(function(snapshot) {
                if (snapshot.empty) {
                    l.error(`Error when tring to find a reservation with the Phone number ${req.params.phoneNumber}`, error); 
                    res.status(404).end();
                    return;
                }

                const data = [];
                snapshot.forEach(function(doc) {
                    data.push(doc.data());
                });
                
                res.json(data);
            })
            .catch(function(error){
                l.error(`-Error when tring to find a reservation with the Phone number ${req.params.phoneNumber}`, error); 
                res.status(404).end();
            });
    }

    delete(req, res) {
        ReservationService.cancelReservation(req.params.phoneNumber)
            .then(function(snapshot) {
                if (snapshot.empty) {
                    l.error(`Error when tring to find a reservation with the Phone number ${req.params.phoneNumber}`, error); 
                    res.status(404).end();
                    return;
                }
                snapshot.forEach(function(doc) {
                    doc.ref.delete();
                });
                res.json({success: true});
            })
            .catch(function(error){
                l.error(`-Error when tring to find a reservation with the Phone number ${req.params.phoneNumber}`, error); 
                res.status(404).end();
            });
    }
}

export default new Controller();
