import express from 'express';
import indexrouter from './routers/indexRouter'
const http = require('http')
const app = express();
require('dotenv').config()

app.set('port', process.env.SERVER_PORT);

app.listen(app.get('port'), ():void =>{
  console.log(`server port is ${app.get('port')}`)
})

app.use(express.static('public'));

app.use('/', indexrouter);

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASSWORD + process.env.DB_HOST;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect((err:any):void => {
  const collection = client.db("test").collection("devices");
  console.log('mongoDB connection')
  client.close();
});
