exports.postUrl = (connection, params) => {
    return new Promise((resolve, reject) => {
        var sql = 'INSERT INTO Url (url) VALUES(?)';    
        connection.query(sql, params, function(err, rows){
            if(err) throw err;
            resolve(rows)
        });
    })
  }

exports.getUrl = (connection, params) => {
return new Promise((resolve, reject) => {
    var sql = 'SELECT url_id from Url Where url=?';    
    connection.query(sql, params, function(err, rows){
        if(err) throw err;
        resolve(rows)
    });
})
}