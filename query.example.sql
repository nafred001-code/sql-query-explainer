SELECT c.name, COUNT(o.id) AS orders, SUM(o.total) AS revenue
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id AND o.created_at >= '2026-01-01'
GROUP BY c.name
HAVING COUNT(o.id) > 3
ORDER BY revenue DESC
LIMIT 10;
