const { respondJson, respondOnError } = require('./response')
// const bookmarkData = require('../models/bookmarkModel')
const connection = require('./DBConfig')


exports.addUrl = async (req, res) => {
    console.log(req.query)

    connection.connect();

    var sql = 'SELECT url_id from Url Where url=?';
    var params = [req.query.url]
    await connection.query(sql, params, function(err, rows) {
        if(err) throw err;
        if(rows.length != 0) {
            console.log(rows)
            respondJson({"id":rows[0].url_id}, res, 200)
        }
    });

    var sql = 'INSERT INTO Url (url) VALUES(?)';    
    await connection.query(sql,params, function(err, rows){
        if(err) throw err;
        respondJson({"insertId":rows.insertId}, res, 201)
    });

    connection.end()

  }