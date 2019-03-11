const express = require("express");
const router = express.Router();

const { getAllMovies, getMovieById } = require("../db/queries/movies_q.js");

router.get("/", getAllMovies);
router.get("/:id", getMovieById);

module.exports = router;
