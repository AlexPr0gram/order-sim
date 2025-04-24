CREATE TABLE orders (
    id TEXT PRIMARY KEY,
    manager_id TEXT NOT NULL,
    manager_name TEXT NOT NULL,
    manager_number TEXT NOT NULL,
    location TEXT NOT NULL,
    caption TEXT NOT NULL,
    time_create INTEGER NOT NULL,
    status INTEGER NOT NULL
);