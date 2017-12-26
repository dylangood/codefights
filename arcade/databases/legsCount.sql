DROP PROCEDURE IF EXISTS legsCount;
CREATE PROCEDURE legsCount()
    SELECT 2 * COUNT(CASE type WHEN 'human' THEN 1 ELSE NULL END) 
        + 4 * COUNT(CASE type WHEN 'cat' THEN 1 WHEN 'dog' THEN 1 ELSE NULL END) 
    as summary_legs
    FROM creatures
    ORDER BY id;
