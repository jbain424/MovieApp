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

module.exports = { getAllComments };
