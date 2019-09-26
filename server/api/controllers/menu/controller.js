import MenuService from '../../services/Menu/menu.service';
import l from '../../../common/logger';

export class Controller {
    drinks(req, res) {
        MenuService.getDrinks()
            .then(function(snapshot) {
                const data = [];
                snapshot.forEach(function(doc) {
                    data.push(doc.data());
                });

                res.json(data);
            })
            .catch(function(error){
                l.error('error when trying to get the drinks list', error); 
                res.status(404).end();
            });
    } 

    appetizers(req, res) {
        MenuService.getAppetizers()
            .then(function(snapshot) {
                const data = [];
                snapshot.forEach(function(doc) {
                    data.push(doc.data());
                });
                
                res.json(data);
            })
            .catch(function(error){
                l.error('error when trying to get the appetizers list', error); 
                res.status(404).end();
            });
    } 

    specials(req, res) {
        MenuService.getSpecials()
            .then(function(snapshot) {
                const data = [];
                snapshot.forEach(function(doc) {
                    data.push(doc.data());
                });
                
                res.json(data);
            })
            .catch(function(error){
                l.error('error when trying to get the specials list', error); 
                res.status(404).end();
            });
    } 
}

export default new Controller();