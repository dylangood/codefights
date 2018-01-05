/*Please add ; after each select statement*/
CREATE PROCEDURE pastEvents()
BEGIN
    SET @most_recent = (
        SELECT event_date
        FROM Events
        ORDER BY event_date DESC
        LIMIT 1
    );
    SELECT name, event_date
    FROM Events
    WHERE event_date < @most_recent AND event_date >= @most_recent - INTERVAL 7 DAY
    ORDER BY event_date DESC;
END
