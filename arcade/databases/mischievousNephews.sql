/*Please add ; after each select statement*/
CREATE PROCEDURE mischievousNephews()
BEGIN
  SELECT (DAYOFWEEK(mischief_date) + 5) MOD 7 AS "weekday", mischief_date, author, title
  FROM mischief
  ORDER BY weekday, FIND_IN_SET(author, 'Huey,Dewey,Louie'), mischief_date, title ASC;
END