/*Please add ; after each select statement*/
CREATE PROCEDURE netIncome()
BEGIN
	SELECT YEAR(date) AS year, (MONTH(date) - 1) DIV 3 + 1 AS quarter, 
        SUM(profit) - SUM(loss) AS net_profit
    FROM accounting
    GROUP BY year, quarter
    ORDER BY year ASC, quarter ASC;
END
