DROP DATABASE Sciagi
CREATE DATABASE sciagi;
use sciagi


CREATE TABLE sciagahistoria (
    id INT PRIMARY KEY IDENTITY(1,1),
    dzial VARCHAR(255),
    podtemat1 TEXT,
    podtemat2 TEXT,
    podtemat3 TEXT,
    podtemat4 TEXT,
    podtemat5 TEXT,
    podtemat6 TEXT,
    podtemat7 TEXT,
    podtemat8 TEXT
);



CREATE TABLE sciagabiologia (
    id INT PRIMARY KEY IDENTITY(1,1),
    dzial VARCHAR(255),
    podtemat1 TEXT,
    podtemat2 TEXT,
    podtemat3 TEXT,
    podtemat4 TEXT,
    podtemat5 TEXT,
    podtemat6 TEXT,
    podtemat7 TEXT,
    podtemat8 TEXT
);



CREATE TABLE sciagachemia (
    id INT PRIMARY KEY IDENTITY(1,1),
    dzial VARCHAR(255),
    podtemat1 TEXT,
    podtemat2 TEXT,
    podtemat3 TEXT,
    podtemat4 TEXT,
    podtemat5 TEXT,
    podtemat6 TEXT,
    podtemat7 TEXT,
    podtemat8 TEXT
);




INSERT INTO sciagahistoria (dzial, podtemat1, podtemat2, podtemat3, podtemat4, podtemat5, podtemat6, podtemat7, podtemat8)
VALUES ('Starożytność', 'Egipt', 'Grecja', 'Rzym', 'Chiny', 'Indie', 'Mezopotamia', 'Persja', 'Ameryka przedkolumbijska');

INSERT INTO sciagahistoria (dzial, podtemat1, podtemat2)
VALUES ('Średniowiecze', 'Krucjaty', 'Feudalizm');


INSERT INTO sciagabiologia (dzial, podtemat1, podtemat2, podtemat3, podtemat4, podtemat5, podtemat6, podtemat7, podtemat8)
VALUES ('Komórka', 'Budowa', 'Podział', 'Fotosynteza', 'Oddychanie komórkowe', 'DNA', 'RNA', 'Mitochondrium', 'Jądro komórkowe');

INSERT INTO sciagabiologia (dzial, podtemat1, podtemat2, podtemat3)
VALUES ('Ewolucja', 'Darwin', 'Selekcja naturalna', 'Ewolucja człowieka');


INSERT INTO sciagachemia (dzial, podtemat1, podtemat2, podtemat3, podtemat4, podtemat5, podtemat6, podtemat7, podtemat8)
VALUES ('Pierwiastki', 'Wodór', 'Hel', 'Węgiel', 'Azot', 'Tlen', 'Neon', 'Krypton', 'Radon');

INSERT INTO sciagachemia (dzial, podtemat1, podtemat2, podtemat3, podtemat4)
VALUES ('Związki chemiczne', 'Kwasy', 'Zasady', 'Sole', 'Estry');


SELECT * FROM sciagahistoria;
SELECT * FROM sciagabiologia;
SELECT * FROM sciagachemia;
