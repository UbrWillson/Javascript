export class Validator {

    static validateFields(key, val, exp) {
        try {
            if (key === '') {
                throw new Error('You are not insert any symbols in key')
            }
            if (val === '') {
                throw new Error('You are not insert any symbols in info')
            }
            if (exp === '') {
                throw new Error('You are not insert any symbols in time of expire')
            }
            return true;
        } catch (e) {
            alert(e.message);
            return false;
        }
    }
}