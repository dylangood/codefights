/*Please add ; after each select statement*/
CREATE PROCEDURE orderOfSuccession()
BEGIN
	SELECT CONCAT( CASE gender
        WHEN 'M' THEN 'King '
        WHEN 'F' THEN 'Queen '
        END
    , name) AS name
    FROM Successors
    ORDER BY birthday ASC;
END
