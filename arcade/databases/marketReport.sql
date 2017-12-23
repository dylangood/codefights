/*Please add ; after each select statement*/
CREATE PROCEDURE marketReport()
BEGIN
	SELECT country, COUNT(competitor) AS competitors
    FROM foreignCompetitors
    GROUP BY country
    UNION
    SELECT 'Total:', COUNT(competitor) AS competitors
    FROM foreignCompetitors;
END
