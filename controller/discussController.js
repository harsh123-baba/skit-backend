const connection = require("../Model/connection")
function DicsussController(req, res){
    sqlQuery = `select id, title, created_at, user_id from discuss;`
    connection.query(sqlQuery, (err, result) => {
        if (err) {
          console.error('Error inserting user:', err);
          return;
        }
        res.json(result)
      });
}

module.exports = DicsussController;