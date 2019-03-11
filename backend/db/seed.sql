DROP DATABASE IF EXISTS movie_app;
CREATE DATABASE movie_app;

\c movie_app;

CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  name VARCHAR
);

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  genre_id INT,
  img_url VARCHAR
);

CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  stars INT,
  movie_id INT REFERENCES movies(id)
);
--
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  comment VARCHAR NOT NULL,
  movie_id INT REFERENCES movies(id)

);

INSERT INTO genres (name) VALUES ('Drama'), ('Comedy'), ('Thriller'), ('Action'), ('Biographical Film');

INSERT INTO movies (title, genre_id, img_url) VALUES
('Boyz n the Hood', 1, 'https://images-na.ssl-images-amazon.com/images/I/51uEfetmBCL._SY445_.jpg'),
('Coming to America', 2 , 'https://images-na.ssl-images-amazon.com/images/I/51A3RXJ2QRL._SY445_.jpg'),
('Friday', 2, 'https://cdn.cinematerial.com/p/297x/ffji2e4d/friday-movie-poster-md.jpg'),
('Malcolm X', 1, 'https://images-na.ssl-images-amazon.com/images/I/51-czRfMO%2BL._SY450_.jpg'),
('Training Day', 3 , 'https://images-na.ssl-images-amazon.com/images/I/51IwFEqs96L.jpg'),
('Django Unchained', 4, 'https://images-na.ssl-images-amazon.com/images/I/51Bk7t055EL._SY445_.jpg'),
('Love and Basketball', 1, 'https://imgc.allpostersimages.com/img/print/u-g-F4S6OP0.jpg?w=550&h=550&p=0'),
('Juice', 4, 'http://2.bp.blogspot.com/_qLM587_SJRI/TExegUKy1tI/AAAAAAAAAB4/28LxUWbuNcY/s1600/195456~Juice-Posters.jpg'),
('Whats Love Got To Do With It', 5, 'https://dtvimages.hs.llnwd.net/e1//db_photos/movies/AllPhotosAPGI/14813/14813_aa.jpg'),
('Do The Right Thing', 1, 'https://images-na.ssl-images-amazon.com/images/I/61b9qaUhqzL.jpg');


INSERT INTO ratings (stars, movie_id) VALUES
(4, 1),
(3, 2),
(5, 3),
(4, 4),
(3, 5),
(4, 6),
(5, 7),
(5, 8),
(3, 9),
(4, 10);

INSERT INTO comments VALUES ('')
