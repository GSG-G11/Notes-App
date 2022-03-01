BEGIN;

DROP TABLE IF EXISTS users,notes CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(125) NOT NULL,
    note TEXT NOT NULL,
    users_id INT NOT NULL,
    FOREIGN KEY (users_id) 
    REFERENCES users(id) 
);

INSERT INTO users (name) VALUES 
(
'Khaled'
),
(
'Rand'
);

INSERT INTO notes (title, note, users_id) VALUES 
(
    'first note',
    'note1 note1 note1 note1 note1',
    '1'
),
(
    'second note',
    'note2 note2 note2 note2 note2',
    '2'
);

COMMIT;