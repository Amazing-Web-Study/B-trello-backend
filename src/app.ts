import express from 'express';
const indexrouter = require('../src/routers/indexRouter')
const connect = require('./db/db')
import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.set('port', process.env.SERVER_PORT);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', indexrouter)
app.use((req: any, res: any) => {
  res.header("Access-Control-Allow-Origin", "*")
})

connect()


app.listen(app.get('port'), ():void =>{
  console.log(`server port is ${app.get('port')}`)
})
