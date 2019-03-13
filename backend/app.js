const express = require('express');
var path = require("path");
var logger = require("morgan");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const session = require("express-session");


const movies = require('./routes/movies.js');
const genres = require("./routes/genres.js");
const comments = require("./routes/comments.js");

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser("cookie cookie cookie"));


app.use(express.static(path.join(__dirname, 'public')));

app.use('/movies', movies);
app.use('/genres', genres);
app.use('/comments', comments);

app.get('/', (req, res) => {
  res.send('This is the homepage!')
});

app.get('*', (req, res) => {
  res.send("There's an ERROR! Try again!")
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.json({ message: 'there was an error', error: err });
});

module.exports = app;
