const connection = require('../Model/connection');
function CreateCommentController (req, res){
    newComment = req.body;
    const id = parseInt(newComment.discuss_id)
    
    if(newComment){
        sqlQuery = `INSERT INTO comments (discuss_id, comment_user_id, content) VALUES ("${id}", "${newComment.user_id}","${newComment.content}")`
        connection.query(sqlQuery, (err, result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.json(result);
            }
        })
    }
}
module.exports = CreateCommentController;