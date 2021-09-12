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
// var cookieParser = require('cookie-parser')

dotenv.config()

const app = express();

const options = {
  origin: 'http://localhost:3000', // 접근 권한을 부여하는 도메인
  credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
  optionsSuccessStatus: 200 // 응답 상태 200으로 설정
};

app.use(cors(options));

app.set('port', process.env.SERVER_PORT);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use(cookieParser())

app.use('/api/card', CardRouter)
app.use('/api/list', ListRouter)
app.use('/api/user', UserRouter)

connect()

app.listen(app.get('port'), ():void =>{
  console.log(`server port is ${app.get('port')}`)
})
