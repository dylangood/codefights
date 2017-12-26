/*Please add ; after each select statement*/
CREATE PROCEDURE nullIntern()
BEGIN
	SELECT COUNT(id) AS number_of_nulls
    FROM departments
    WHERE description IS NULL
        OR description REGEXP '^ *[nN][uU][lL][lL] *$'
        OR description REGEXP '^ *[nN][iI][lL] *$'
        OR description REGEXP '^ *- *$';
END
