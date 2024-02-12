-- Table: Salary

-- +-------------+----------+
-- | Column Name | Type     |
-- +-------------+----------+
-- | id          | int      |
-- | name        | varchar  |
-- | sex         | ENUM     |
-- | salary      | int      |
-- +-------------+----------+
-- id is the primary key (column with unique values) for this table.
-- The sex column is ENUM (category) value of type ('m', 'f').
-- The table contains information about an employee.

update salary set sex =
case sex
when 'm' then 'f'
else 'm'
end;