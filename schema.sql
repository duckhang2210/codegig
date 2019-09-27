CREATE DATABASE codegig;
USE codegig;

CREATE TABLE gig (
	id int AUTO_INCREMENT,
    title varchar(200) NOT NULL,
    technologies varchar(200),
    budget VARCHAR(20),
    description varchar(200),
    contact varchar(50),
    createdAt DATETIME,
    updatedAt DATETIME,
    PRIMARY KEY(id)
)