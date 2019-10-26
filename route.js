const express = require('express')
const urlController = require('./urlController')
const router = express.Router()

/* GET home page. */
router.post('/register.json', urlController.addUrl)

module.exports = router
