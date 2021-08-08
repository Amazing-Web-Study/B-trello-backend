import express from 'express';
import router from './routers/route'

const app = express();

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
// app.set('views', __dirname + '/public');

app.use(express.static('public'));
app.use(router);
app.listen(3000,():void =>{
  console.log('start');
});