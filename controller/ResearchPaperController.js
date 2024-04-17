const connection = require('../Model/connection')

function ResearchPaperController(req, res){
    sqlQuery = `SELECT * FROM research_paper;`;
    connection.query(sqlQuery, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(result)
        }
    })
}
module.exports = ResearchPaperController;