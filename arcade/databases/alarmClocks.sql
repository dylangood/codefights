/*Please add ; after each select statement*/
CREATE PROCEDURE alarmClocks()
BEGIN
    SET @originaldate = (SELECT input_date FROM userInput);
    DROP TABLE IF EXISTS output;
    CREATE TABLE IF NOT EXISTS output LIKE userInput;
    INSERT INTO output (input_date) VALUES(@originaldate);
    SET @nextdate = TIMESTAMPADD(WEEK, 1, @originaldate);
    WHILE YEAR(@nextdate) = YEAR(@originaldate) DO
	    INSERT INTO output (input_date) VALUES(@nextdate);
        SET @nextdate = TIMESTAMPADD(WEEK, 1, @nextdate);
    END WHILE;
    SELECT input_date AS alarm_date
    FROM output
    ORDER BY alarm_date ASC;
END
