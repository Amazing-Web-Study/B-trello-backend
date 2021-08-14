import express from 'express';
import indexrouter from './routers/indexRouter'
const connect = require('./db/db')
import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.set('port', process.env.SERVER_PORT);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', indexrouter)

connect()


app.listen(app.get('port'), ():void =>{
  console.log(`server port is ${app.get('port')}`)
})
