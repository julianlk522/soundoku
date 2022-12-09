CREATE TABLE IF NOT EXISTS Scores (
    score_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    duration INT NOT NULL,
    errors INT NOT NULL
)

INSERT INTO Scores (username, duration, errors)
VALUES ('julian', 1000, 5);