const express = require('express')
const app = express()
const index = require('./route')


app.use('/', index)

app.listen(3000, () => {
    console.log(`3000번 port에 http server를 띄웠습니다.`)
})