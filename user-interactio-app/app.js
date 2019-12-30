const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json()) // json 객체를 쓰기위한 필수 요소

const indexRouter = require('./routes/index.js')
const userRouter = require('./routes/user.js')


const port = 3001

app.use(express.static(__dirname + '/public'))

app.use('/', indexRouter)
app.use('/user', userRouter)

app.listen(port, ()=> {console.log("server start")})
