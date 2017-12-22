/*Please add ; after each select statement*/
CREATE PROCEDURE gradeDistribution()
BEGIN
  SELECT Name, ID
  FROM Grades
  WHERE ( Final > 0.5 * (Midterm1 + Midterm2) AND Final > 0.25 * (Midterm1 + Midterm2) + 0.5 * Final )
  ORDER BY substring(Name, 1, 3) ASC, ID ASC;
END