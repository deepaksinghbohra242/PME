const expressAsyncHandler = require('express-async-handler');
const db = require('../config/database')

const test = expressAsyncHandler(async (req, res) => {
    try {
        db.getConnection((err ,connection)=>{
            if(err) throw err;
        

            connection.query('select * from institute' , (queryErr , result) =>{
                connection.release();
                if(queryErr) throw queryErr;
                res.json(result);
            })
        })
    } catch (error) {
        res.json(error);
    }
});

module.exports = {
    test
}