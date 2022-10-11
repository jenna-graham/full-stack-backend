-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS lists;
DROP TABLE IF EXISTS users CASCADE; 

CREATE TABLE users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email VARCHAR,
  password_hash VARCHAR NOT NULL,
  first_name VARCHAR,
  last_name VARCHAR
);

CREATE TABLE lists (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id BIGINT,
  item VARCHAR,
  color VARCHAR,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

