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
  genre_id INT REFERENCES genres(id),
  img_url VARCHAR
);

CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  stars INT NOT NULL CHECK (stars between 1 and 5),
  movie_id INT REFERENCES movies(id)
);

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
(4, 9),
(4, 10),
(5, 6),
(3, 7),
(4, 8),
(5, 9),
(5, 10);

INSERT INTO comments (comment, movie_id) VALUES
('By the end of Boyz N the Hood, I realized I had seen not simply a brilliant directorial debut, but an American film of enormous importance.', 1),
('A lesser movie might have handled this material in a perfunctory way, painting the characters with broad strokes of good and evil, setting up a confrontation at the end, using a lot of violence and gunfire to reward the good and punish the rest.', 1),
('The entire film is packed with slick gags, hilarious characters and delightful parody. Coming to America is a romantic comedy that entertains you again and again, and Eddie Murphy is on top form throughout.', 2),
('I have seen this movie 7 or 8 times and it still cracks me up. This is my favorite comedy of all time. All of the characters were funny, but I actually ached from laughter in scenes with Arsenios preacher and in the Barber shop.', 2),
('This film was so hilarious that I just want to live in Zamunda, I was ready to move to Queens (If Akeem and Semi were really there, of course).', 2),
('This movie is hilarious! As far as comedies go about the hood, this one is hands down the best. Chris Tucker and Ice Cube really mix up nicely in this one. This is a feel good movie and doesnt glorify the gritty hard reality violence of the inner city at all, but rather focuses on strugglin to make it with good humor and staying positive.', 3),
('Believe me, If you could relate to SMOKEY and CRAIG, then you would see why this flick is so funny! While Dumb & Dumber and Austin Powers:The Spy Who Shagged Me, had me rollin at times, it didnt do enough to throw me at that front porch where our two main characters sit and do nothing but get high and jive!
', 3),
('A stunning performance by Denzel Washington (Oscar-nominated) carries this film literally into cinematic excellence.', 4),
('I really enjoyed the film; it was long but never slow and definitely worth watching.', 4),
('Spike Lee struggled mightily to get Malcolm X made, financially and artistically. But when all was said and done, he produced an epic blockbuster and a definite treatment of the Malcolms life.
', 4),
('The reason why this movie was so great is because it wasnt the typical Denzel role model movie. We KNOW that he can play those roles well so its a testament to his acting ability that he can portray the other side of the spectrum. And my hat goes off to Ethan because he bounces off Denzel flawlessly.', 5),
('A film like Training Day will rise and fall with the performances of these two characters since one or the other and mostly both is on screen from the beginning. Fortunately both Washington and Hawke complement each others performances like jigsaw puzzle fit.', 5),
('Quentin Tarantino, one of the most iconic directors of the 21st (and late 20th) century, why? Simple. Because of masterpieces like this. Tarantino defies the laws of film, he shoots them in his own way, however he wants.', 6),
('Absolutely loved every minute of this movie. Usually I am not too crazy about Tarantinos movies, but this one is definitely the best one I have seen in a long time.', 6),
('The basketball scenes are well shot and pretty realistic in the aspect of how male and female teams are viewed by the fans. Overall a very enjoyable movie.', 7),
('Instantly, when I watched this one, I could not help but harken back to Everybodys All-American, which had sports as an undercurrent to the central love story between Gavin and Babs streching a full quarter-century in spanning four decades.', 7),
('This is a hip-hop classic that I could definitely relate to being from NYC, and having been in a click of four friends since grade school. The film has a great pace and rhythm from start to finish, never a dull moment.', 8),
('I watched the film recently, and was amazed by how brilliant it was. Not knowing about Tina Turners life, I was shocked. The movie was pretty hard hitting. Overall, I loved the movie and any awards for it were well rewarded.
', 9),
('A Must See!', 9),
('In all likelihood Spike Lees most important achievement - as director, writer and actor and one of the strongest films you will see about race relations, Do The Right Thing looks dated at times, but it lost none of its impact and relevance.', 10);
