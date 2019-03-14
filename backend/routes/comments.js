const express = require("express");
const router = express.Router();

const { getAllComments, getCommentsById } = require("../db/queries/comments_q.js");

router.get("/", getAllComments);
router.get('/:id', getCommentsById)

module.exports = router;
