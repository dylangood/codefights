/*Please add ; after each select statement*/
CREATE PROCEDURE companyEmployees()
BEGIN
	SELECT d.dep_name, e.emp_name
    FROM departments AS d, employees AS e
    ORDER BY dep_name ASC, emp_name ASC;
END
