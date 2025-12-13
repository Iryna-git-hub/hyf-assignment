-- 1. How many tasks are in the task table?
SELECT COUNT(t.id) FROM task t;

-- 2. How many tasks in the task table do not have a valid due date?
SELECT COUNT(t.id) FROM task t WHERE t.due_date IS NULL;

-- 3. Find all the tasks that are marked as done.
SELECT * FROM task t WHERE t.status_id IS 3;

-- 4. Find all the tasks that are not marked as done.
SELECT * FROM task t WHERE t.status_id IS NOT 3;

-- 5. Get all the tasks, sorted with the most recently created first.
SELECT * FROM task t ORDER BY t.created;

-- 6. Get the single most recently created task.
SELECT * FROM task t ORDER BY t.created DESC LIMIT 1;

-- 7. Get the title and due date of all tasks where the title or description contains database.
SELECT t.title, t.due_date FROM task t WHERE t.title LIKE '%database%' OR t.description LIKE '%database%';

-- 8. Get the title and status (as text) of all tasks.
SELECT t.title, s.name FROM task t JOIN status s ON t.status_id = s.id;

-- 9. Get the name of each status, along with a count of how many tasks have that status.
SELECT s.name, COUNT(*) AS tasks_count FROM status s JOIN task t WHERE s.id = t.status_id GROUP BY s.id;

-- 10. Get the names of all statuses, sorted by the status with most tasks first.
SELECT s.name, COUNT(*) AS tasks_count FROM status s JOIN task t WHERE s.id = t.status_id GROUP BY s.id ORDER BY tasks_count DESC ;