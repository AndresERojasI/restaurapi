import l from '../../../common/logger';
import database from '../../../common/database'

class MenuService {
    getDrinks() {
        l.info(`${this.constructor.name}.getDrinks()`);
        return database.collection('drinks').get()
    }

    getAppetizers() {
        l.info(`${this.constructor.name}.getAppetizers()`);
        return database.collection('appetizers').get()
    }

    getSpecials() {
        l.info(`${this.constructor.name}.getSpecials()`);
        return database.collection('specials').get()
    }
}

export default new MenuService();