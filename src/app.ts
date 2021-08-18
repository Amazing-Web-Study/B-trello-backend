import express from 'express';
const indexrouter = require('../src/routers/indexRouter')
const connect = require('./db/db')
const cors = require('cors')
import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.use(cors())
app.set('port', process.env.SERVER_PORT);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', indexrouter)


connect()


app.listen(app.get('port'), ():void =>{
  console.log(`server port is ${app.get('port')}`)
})
