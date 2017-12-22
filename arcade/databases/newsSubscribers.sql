/*Please add ; after each select statement*/
CREATE PROCEDURE newsSubscribers()
BEGIN
	SELECT subscriber
    FROM half_year
    WHERE LOCATE("Daily", newspaper)
    UNION
    SELECT subscriber
    FROM full_year
    WHERE LOCATE("Daily", newspaper)
    ORDER BY subscriber;
END
