const db = require('./index.js');

const getAllMovies = (req, res, next) => {
  db.any('SELECT * FROM movies')
  .then(data => {
    res.status(200)
    .json({
      status: "success",
      data: data,
      message: "Got ALL Movies!"
    })
  })
  .catch(err => next(err))
}

const getMovieById = (req, res, next) => {
  let id = parseInt(req.params.id)
  db.one('SELECT * FROM movies WHERE movies.id=$1', [id])
  .then(data => {
    console.log(data);
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Got ONE Movie!'
    })
  })
  .catch(err => {
    console.log('Error', err)
    next(err)
  })
};

module.exports = { getAllMovies, getMovieById };
