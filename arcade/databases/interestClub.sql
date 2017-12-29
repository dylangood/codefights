CREATE PROCEDURE interestClub()
    SELECT name
    FROM people_interests
    WHERE interests & 8 AND interests & 1
    -- WHERE interests & 9 = 9 AND interests & 4095
    ORDER BY name
