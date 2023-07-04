DROP TABLE IF EXISTS artist;
DROP TABLE IF EXISTS photo_report;
DROP TABLE IF EXISTS photo;


CREATE TABLE artist (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  artist_name varchar(255) NOT NULL,
  website varchar(255)
);

CREATE TABLE photo_report (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  report_name varchar(255) NOT NULL,
  report_date date NOT NULL,
  report_description varchar(255) NOT NULL,
  place varchar(255) NOT NULL,
  artist_id integer, 
  isHomePage BOOLEAN,
  CONSTRAINT artist_id_fk FOREIGN KEY (artist_id) REFERENCES artist(id)
);

CREATE TABLE photo (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  photo_report_id INTEGER,
  src varchar(255) NOT NULL,
  alt varchar(255) NOT NULL,
  isOnAboutPage BOOLEAN,
  CONSTRAINT photo_report_id_fk FOREIGN KEY (photo_report_id) REFERENCES photo_report(id)
);