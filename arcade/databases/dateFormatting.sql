/*Please add ; after each select statement*/
CREATE PROCEDURE dateFormatting()
BEGIN
	SELECT STR_TO_DATE(date_str, GET_FORMAT(DATE, 'ISO')) AS date_iso
    FROM documents;
END
