\l

CREATE DATABASE mystore_db;
\c mystore_db

CREATE TABLE tasks (
  id serial PRIMARY KEY,
  title VARCHAR ( 255 ) NOT NULL,
  completed boolean DEFAULT false
);

\dt

INSERT INTO tasks (title) VALUES
  ('Tarea 1'),
  ('Completar los cursos'),
  ('Limpiar');

  SELECT * FROM tasks;
