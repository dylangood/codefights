/*Please add ; after each select statement*/
CREATE PROCEDURE countriesSelection()
BEGIN
	SELECT c.name, c.continent, c.population 
  FROM countries c 
  WHERE c.continent = "Africa" 
  ORDER BY c.name;
END