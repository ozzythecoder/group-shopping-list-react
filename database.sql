-- Create database 'shopping-list'

CREATE TABLE shopping_table
  (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(80) NOT NULL,
  "quantity" DECIMAL(10,2) NOT NULL,
  "unit" VARCHAR(20) NOT NULL,
  "is_purchased" BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO shopping_table
  (name, quantity, unit)
VALUES
  ('bread', 1, 'loaf'),
  ('coffee', 15, 'gallons'),
  ('bananas', 4, 'each');

-- Sorts alphabetically, places purchased items at end of list
SELECT * FROM shopping_table
	ORDER BY is_purchased, name;