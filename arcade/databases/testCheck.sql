CREATE PROCEDURE testCheck()
    SELECT id, IF ( given_answer = correct_answer, 'correct', IF(IFNULL(given_answer,'no answer') <> 'no answer','incorrect','no answer')) AS checks
    FROM answers
    ORDER BY id;
