/*Please add ; after each select statement*/
CREATE PROCEDURE correctIPs()
BEGIN
    SELECT id, ip
    FROM ips
    WHERE ip REGEXP '^(([0-9]{1,3}[.]){2})(([0-9]{1,3}[.])([0-9]{2})|([0-9]{2}[.])([0-9]{1,3}))$'
        AND IS_IPV4(ip)
	ORDER BY id;
END
