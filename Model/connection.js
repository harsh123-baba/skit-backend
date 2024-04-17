const mysql = require('mysql2')

var database = mysql.createConnection({
    host: 'localhost',
    user: 'skit',
    password: '4567',
    database: 'cybersecurity_awarness'
});


database.connect((err => {
    if (err) throw err;
    console.log('MySQL Connected');
}));

module.exports = database