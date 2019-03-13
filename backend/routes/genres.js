const express = require("express");
const router = express.Router();

const {
  getAllGenres,
  getMoviesByGenreId
} = require("../db/queries/genres_q.js");

router.get("/", getAllGenres);
router.get("/:id/movies", getMoviesByGenreId);

module.exports = router;
