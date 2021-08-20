import express from 'express';
// 분리한 router 호출
// const indexrouter = require('../src/routers/indexRouter')
const CardRouter = require('./routers/card/CardRouter')
const ListRouter = require('./routers/list/ListRouter')
const UserRouter = require('./routers/user/UserRouter')
// db 연결
const connect = require('./db/db')
// cors 설정 ( 전체허용 )
const cors = require('cors')
// dotenv로 secret file 암호화
import dotenv from 'dotenv'
dotenv.config()

const app = express();


app.use(cors())
app.set('port', process.env.SERVER_PORT);

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/card', CardRouter)
app.use('/api/list', ListRouter)
app.use('/api/user', UserRouter)

connect()

app.listen(app.get('port'), ():void =>{
  console.log(`server port is ${app.get('port')}`)
})
