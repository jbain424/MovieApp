const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost:5432/movie_app');



module.exports = db
