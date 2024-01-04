const {createPool} = require('mysql');

const con = createPool({
    host : 'localhost',
    user : 'root',
    password : "" ,
    database : "pme",
    connectionLimit : 10
})

module.exports = con;