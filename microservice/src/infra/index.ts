import sqlite3 from'sqlite3';

sqlite3.verbose();

const initDB = () => {
    const db = new sqlite3.Database('./code_challenge.db', (err) => {
        if (err) return console.error(err.message);
        
        console.log('Connected to the in-memory SQlite database.');
    });

    db.serialize(function() {
        db.run(`CREATE TABLE IF NOT EXISTS Users (
                    username text NOT NULL UNIQUE,
                    password text NOT NULL
                )
        `);
        
        db.run(`CREATE TABLE IF NOT EXISTS Project (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text NOT NULL
        )
`);
    });

    db.close();
}

export default initDB;