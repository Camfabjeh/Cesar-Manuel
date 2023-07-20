DROP TABLE IF EXISTS photo;
DROP TABLE IF EXISTS photo_report;
DROP TABLE IF EXISTS artist;

DROP TABLE IF EXISTS user;

CREATE TABLE user (
  login varchar(255),
  password varchar(255)
);

CREATE TABLE artist (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  artist_name varchar(255) NOT NULL,
  website varchar(255)
);

CREATE TABLE photo_report (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  report_name varchar(255) NOT NULL,
  report_date INT NOT NULL,
  report_description LONGTEXT NOT NULL,
  photo_preview varchar(255) NOT NULL,
  photo_preview_alt varchar(255) NOT NULL,
  place varchar(255) NOT NULL,
  artist_id integer, 
  CONSTRAINT artist_id_fk FOREIGN KEY (artist_id) REFERENCES artist(id)
);

CREATE TABLE photo (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  photo_report_id INTEGER,
  src varchar(255) NOT NULL,
  alt varchar(255) NOT NULL,
  CONSTRAINT photo_report_id_fk FOREIGN KEY (photo_report_id) REFERENCES photo_report(id)
);

INSERT INTO artist (artist_name, website)
VALUES ("Caroline Guillot", "https://www.ateliershibumi.com/"), ("Mathilde Fabry", "https://www.ma-cantine-buissonniere.com/");

INSERT INTO photo_report (
  report_name,
  report_date,
  report_description,
  photo_preview,
  photo_preview_alt,
  place,
  artist_id
)
VALUES (
  "Atelier Shibumi", 
  "2022", 
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  "AS.jpg",
  "Lorem Ipsum",
  "La Regrippière", 
  1
), (
  "Ma Cantine Buissonnière", 
  "2019", 
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  "MCB.jpg",
  "Lorem Ipsum",
  "Chemellier", 
  2
);

INSERT INTO photo (
  photo_report_id,
  src,
  alt
) 
VALUES (
  1,
  "AS.jpg",
  "Lorem ipsum"
), (
  2,
  "MCB.jpg",
  "Lorem ipsum"
)
