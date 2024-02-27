module.exports = app => {
    function existsOrError(value, message) {
        if(!value) throw message;
        if(Array.isArray(value) && value.length === 0) throw message;
        if(typeof value === 'string' && !value.trim()) throw message;
    }

    function notExistsOrError(value, message) {
        try {
            existsOrError(value);
        } catch(message) {
            return;
        }
        throw message;
    }

    function equalsOrError(valueOne, valueTwo, message) {
        if(valueOne !== valueTwo) throw message;
    }

    return { existsOrError, notExistsOrError, equalsOrError }
}