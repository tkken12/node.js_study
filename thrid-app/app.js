const express = require('express')
const indexRouter = require('./routes/index.js')
const userRouter = require('./routes/user.js')

const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'))

app.use('/', indexRouter)
app.use('/user', userRouter)

app.listen(port, ()=> {console.log("server start")})
