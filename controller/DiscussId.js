const connection = require('../Model/connection')
const util = require('util');

const queryAsync = util.promisify(connection.query).bind(connection);


async function DiscussIdController(req, res){
    const id = req.params.id;
    if(id){
        try {
            // Execute both queries concurrently using Promise.all()
            const [result1, result2] = await Promise.all([
                queryAsync(`SELECT * FROM comments
                            LEFT JOIN discuss ON comments.discuss_id = discuss.id
                            WHERE comments.discuss_id = ${id}
                            UNION
                            SELECT * FROM comments
                            RIGHT JOIN discuss ON comments.discuss_id = discuss.id
                            WHERE discuss.id IS NULL;`),
                queryAsync(`SELECT * FROM discuss WHERE id = ${id};`)
            ]);
            // Log or handle the results here
        console.log(result1);
        console.log(result2);

        res.json([result1, result2]);
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error to handle it elsewhere if needed
    }
    }
}
module.exports = DiscussIdController;