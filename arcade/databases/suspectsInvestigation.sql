/*Please add ; after each select statement*/
CREATE PROCEDURE suspectsInvestigation()
BEGIN
  SELECT id, name, surname
  FROM Suspect
  WHERE height <= 170 AND name LIKE 'b%' AND surname LIKE 'gre_n'
  ORDER BY id ASC;
END