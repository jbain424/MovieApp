const db = require('./index.js');

const getAllComments = (req, res, next) => {
  db.any("SELECT * FROM comments")
    .then(comments => {
      res.status(200).json({
        status: "success",
        comments,
        message: "all commments"
      });
    })
    .catch(err => next(err));
};

const getCommentsById = (req, res, next) => {
  let id = parseInt(req.params.id)
  db.any('SELECT * FROM comments WHERE comments.movie_id=$1', [id])
  .then(data => {
    console.log(data);
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Got Comments for ONE Movie!'
    })
  })
  .catch(err => {
    console.log('Error', err)
    next(err)
  })
};

module.exports = { getAllComments, getCommentsById };
