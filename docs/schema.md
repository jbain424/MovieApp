#Tables and Columns

**Genres**
`id`: SERIAL PRIMARY KEY,
`name`: VARCHAR

**Movies**
`id`: SERIAL PRIMARY KEY,
`title`: VARCHAR NOT NULL,
`genre_id`: INT,
`img_url`: VARCHAR

**Ratings**
`id`: SERIAL PRIMARY KEY,
`stars`: INT,
`movie_id`: INT REFERENCES movies(id),

**Comments**
`id`: SERIAL PRIMARY KEY,
`comment`: VARCHAR NOT NULL,
`movie_id`: INT REFERENCES movies(id),
