/*Please add ; after each select statement*/
CREATE PROCEDURE placesOfInterestPairs()
BEGIN
    SELECT p1.name AS place1, p2.name AS place2
    FROM sights p1, sights p2
    WHERE p1.name < p2.name AND SQRT(POW(p1.x - p2.x, 2) + POW(p1.y - p2.y, 2)) < 5
    ORDER BY place1, place2;
END
