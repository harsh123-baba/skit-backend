const connection = require("../Model/connection");

function CreateNewController(req, res){
    newDiscussionContent = req.body;
    if(newDiscussionContent){
        sqlQuery = `INSERT INTO discuss (title, description, user_id) VALUES ("${newDiscussionContent.title}", "${newDiscussionContent.description}", "${newDiscussionContent.user_id}");`
        connection.query(sqlQuery, (err, result) =>{
            if(err){
                console.log("err", err);
            }
            console.log("Discussion sucessfully inserted");
            res.json(result);
        })
    }
}

module.exports = CreateNewController;
