-- Write your query below
Select e.employee_id, 
    CASE when e.employee_id % 2 = 1 AND e.name not like 'M%'
        then e.salary 
        else 0 
        end AS bonus
    from employees e
    order by e.employee_id 