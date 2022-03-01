BEGIN;

DROP TABLE IF EXISTS categories,notes CASCADE;
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    category VARCHAR(50) NOT NULL
);

CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(125) NOT NULL,
    note TEXT NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (category_id) 
    REFERENCES categories(id) 
);

INSERT INTO categories (category) VALUES 
(
'javascript'
),
(
'python'
),
(
'php'
),
(
'others'
);

INSERT INTO notes (title, note, category_id) VALUES 
(
    'first js note',
    'note1 note1 note1 note1 note1',
    '1'
),
(
    'second js note',
    'note2 note2 note2 note2 note2',
    '1'
);

COMMIT;