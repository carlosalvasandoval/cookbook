import mysql from 'mysql';
const conn = mysql.createConnection({
    host: "localhost",
    database: 'cookbook',
    user: "root",
    password: ""
});

conn.connect(function (err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + conn.threadId);
});

module.exports = conn;