/*Please add ; after each select statement*/
CREATE PROCEDURE routeLength()
BEGIN
	SELECT ROUND(SUM(DISTANCE(POINT(c2.x, c2.y), POINT(c1.x, c1.y))), 9) AS total
    FROM cities c1
    JOIN cities c2
    WHERE c2.id = c1.id + 1;
END
