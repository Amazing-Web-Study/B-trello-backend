import express from 'express';
import indexrouter from './routers/indexRouter'
import mongoose from 'mongoose'
require('dotenv').config()

const app = express();

app.set('port', process.env.SERVER_PORT);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', indexrouter)

const MONGO_URL = 'mongodb://localhost:27017'
//"mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASSWORD + process.env.DB_HOST

mongoose
    .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {console.log('connected to mongoDB')})
    .catch((e) => {console.log(e)})

app.listen(app.get('port'), ():void =>{
  console.log(`server port is ${app.get('port')}`)
})
