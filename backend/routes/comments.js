const express = require("express");
const router = express.Router();

const { getAllComments } = require("../db/queries/comments_q.js");

router.get("/", getAllComments);

module.exports = router;
