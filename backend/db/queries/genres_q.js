const db = require('./index.js');

const getAllGenres = (req, res, next) => {
  db.any("SELECT * FROM genres")
    .then(genres => {
      res.status(200).json({
        status: "suceess",
        genres,
        message: "all genres"
      });
    })
    .catch(err => next(err));
};

const getMoviesByGenreId = (req, res, next) => {
  let genreId = parseInt(req.params.id);
  db.any("SELECT * FROM movies WHERE genre_id = ${genre_id}", {
    genre_id: genreId
  })
    .then(movies => {
      res.status(200).json({
        status: "success",
        movies,
        message: "movies by genre id"
      });
    })
    .catch(err => next(err));
};

module.exports = { getAllGenres, getMoviesByGenreId };
