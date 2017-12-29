/*Please add ; after each select statement*/
CREATE PROCEDURE booksCatalogs()
BEGIN
	SELECT DISTINCT MID( xml_doc,8 + LOCATE("<author>",xml_doc),
                       LOCATE("</author>",xml_doc) - LOCATE("<author>",xml_doc) - 8 ) 
    AS author
    FROM catalogs
    ORDER BY author;
END
