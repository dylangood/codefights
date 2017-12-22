/*Please add ; after each select statement*/
CREATE PROCEDURE securityBreach()
BEGIN
  SELECT first_name, second_name, attribute
  FROM users
  WHERE attribute REGEXP BINARY CONCAT('.+%',first_name,'_',second_name,'%.*')
  ORDER BY attribute ASC;
END