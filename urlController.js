const { respondJson, respondOnError } = require('./response')
const connection = require('./DBConfig')
const urlModel = require('./urlModel.js')

exports.addUrl = async (req, res) => {

    const url = req.query.url
    connection.connect();
    const params = url

    var id = await urlModel.getUrl(connection, params);

    if(id.length !== 0) {
        respondJson({"id":id[0].url_id}, res, 200)
    } else {
        conn = await connection.connect();
        id = await urlModel.postUrl(connection, params);
        respondJson({"id":id}, res, 201)
    }

  }