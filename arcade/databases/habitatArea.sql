/*Please add ; after each select statement*/
CREATE PROCEDURE habitatArea()
BEGIN
    SELECT ST_Area(ST_ConvexHull(ST_GeomFromText(geom.pts))) as area
    FROM (
        SELECT CONCAT('MULTIPOINT(', GROUP_CONCAT( CONCAT(x,' ',y) SEPARATOR ','), ')') as pts
        FROM places 
    ) AS geom;
END
