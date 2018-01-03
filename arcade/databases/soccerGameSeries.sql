/*Please add ; after each select statement*/
CREATE PROCEDURE soccerGameSeries()
BEGIN
    SELECT CASE
        WHEN first_team_wins > second_team_wins THEN 1
        WHEN first_team_wins < second_team_wins THEN 2
        WHEN differential > 0 THEN 1
        WHEN differential < 0 THEN 2
        WHEN first_team_away_goals > second_team_away_goals THEN 1
        WHEN first_team_away_goals < second_team_away_goals THEN 2
        ELSE 0
    END AS winner
    FROM (
        SELECT SUM(CASE
            WHEN match_winner = 1 THEN 1
            ELSE 0
        END) AS first_team_wins,
        SUM(CASE
            WHEN match_winner = 2 THEN 1
            ELSE 0
        END) AS second_team_wins,
        SUM(first_team_score - second_team_score) AS differential,
        SUM(CASE
            WHEN match_host = 2 THEN first_team_score
            ELSE 0
        END) AS first_team_away_goals,
        SUM(CASE
            WHEN match_host = 1 THEN second_team_score
            ELSE 0
        END) AS second_team_away_goals
        FROM (
            SELECT match_id, first_team_score, second_team_score, match_host, CASE
                WHEN first_team_score > second_team_score THEN 1
                WHEN first_team_score < second_team_score THEN 2
                ELSE NULL
            END AS match_winner
            FROM scores
        ) AS scores_mwinners
    ) AS outcomes;
END
