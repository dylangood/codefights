/*Please add ; after each select statement*/
CREATE PROCEDURE localCalendar()
BEGIN
	SELECT event_id, DATE_FORMAT( date + INTERVAL timeshift MINUTE, CASE
        WHEN hours = 12 THEN "%Y-%m-%d %h:%i %p"
        WHEN hours = 24 THEN "%Y-%m-%d %H:%i"
        END ) AS formatted_date
    FROM events e
    JOIN settings s
    USING (user_id)
    ORDER BY event_id;
END
