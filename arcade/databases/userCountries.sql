/*Please add ; after each select statement*/
CREATE PROCEDURE userCountries()
BEGIN
	SELECT u.id, IFNULL(c.country, "unknown") AS country
    FROM users u LEFT JOIN cities c
    ON u.city = c.city
    ORDER BY id ASC;
END
