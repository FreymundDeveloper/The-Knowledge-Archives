const bcrypt = require('bcrypt-nodejs');

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation;

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    };

    const save = async (req, res) => {
        const user = { ...req.body };
        if(req.params.id) user.id = req.params.id;

        if(!req.originalUrl.startsWith('/users')) user.admin = false;
        if(!req.user || !req.user.admin) user.admin = false;

        try {
            existsOrError(user.name, 'Name not informed');
            existsOrError(user.email, 'Email not informed');
            existsOrError(user.password, 'Password not informed');
            existsOrError(user.confirmPassword, 'Incorrect password confirmation');
            equalsOrError(user.password, user.confirmPassword, 'Passwords do not match');

            const userFromDB = await app.db('users').where({ email: user.email }).first();
            if(!user.id) notExistsOrError(userFromDB, 'User already registered');

        } catch(message) {
            return res.status(400).send(message);
        }

        user.password = encryptPassword(user.password);
        delete user.confirmPassword;

        if (user.id) {
            app.db('users').update(user)
                           .where({ id: user.id })
                           .whereNull('deletedAt')
                           .then(_ => res.status(204).send())
                           .catch(err => res.status(500).send(err))
        } else {
            app.db('users').insert(user)
                           .then(_ => res.status(204).send())
                           .catch(err => res.status(500).send(err))
        }
    };

    const get = (req, res) => {
        app.db('users').select('id', 'name', 'email', 'admin')
                       .whereNull('deletedAt')
                       .then(users => res.json(users))
                       .catch(err => res.status(500).send(err))
    };

    const getById = (req, res) => {
        app.db('users').select('id', 'name', 'email', 'admin')
                       .where({ id: req.params.id })
                       .whereNull('deletedAt')
                       .first()
                       .then(user => res.json(user))
                       .catch(err => res.status(500).send(err))
    };

    const remove = async (req, res) => {
        try {
            const articles = await app.db('articles').where({ userId: req.params.id });
            notExistsOrError(articles, 'User have articles registred');

            const rowsUpdated = await app.db('users').update({ deletedAt: new Date() })
                                                     .where({ id: req.params.id });
            existsOrError(rowsUpdated, 'User not found');

            res.status(204).send();
        } catch (message) {
            res.status(400).send(message);
        }
    };

    return { save, get, getById, remove };
}