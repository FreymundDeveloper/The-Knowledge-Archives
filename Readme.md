# The-Knowledge-Archives

The Knowledge Archives is an article storage site, recording articles related to technology and programming, also linking them to individual profiles of registered users who published them.

Some technologies used:

* Vue(2.5);
* Vuex;
* Bootstrap;
* JavaScript;
* CSS;
* HTML;
* Node;
* Express;
* PostgreSql;
* MongoDB.

## Routes 

All routes are linked to the "localhost:3001/ ..." address. The backend runs on port 3001 and the frontend on port 8080. To check the complete list of routes, look at the code in:

* For the Backend - "backend\config\routes.js";

* For the Frontend - "frontend\src\config\router.js";

## Running the app

**Obs 1**: Generate a ".env" file in the backend project root, with the model "module.exports = { authSecret: '' }";

**Obs 2**: After installing the dependencies, check if the Knex "backend\node_modules\knex\lib\migrations\migrate" address is present in "node_modules";

**Obs 3**: Also check that the address mentioned above is correctly indicated within "backend\node_modules\knex\lib\util\make-knex.js";

**Obs 4**: Ensure that MongoDB and PostgreSQL are installed and running on your machine;

**Obs 5**: Make sure the Backend is running before starting the Frontend, otherwise bugs may occur.

```bash
# Installation
$ npm install

# Running
# Open two terminals and go to "cd ./backend" in one, then run:
$ npm run start

# In the other terminal go to "cd ./frontend", then run:
$ npm run serve

# Or for a production version:
$ npm run build
```

**Explanation**: The checks in the above observations are necessary due to possible security problems and the instability of the Knex library, which is already old.