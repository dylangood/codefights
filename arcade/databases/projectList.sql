/*Please add ; after each select statement*/
CREATE PROCEDURE projectList()
BEGIN
  SELECT
    p.project_name,
    p.team_lead,
    p.income
  FROM Projects p;
END