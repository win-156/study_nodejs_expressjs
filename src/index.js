const path = require('path');
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars'); 
const { extname } = require('path');

const app = express()
const port = 3000

//
app.use(morgan('combined'));

//template engine

app.engine('hbs', handlebars.engine(
  {extname: '.hbs'}
));
app.set('view engine', 'hbs'); // Dang dat cho ứng dụng sử dụng cái view engine handlebars
app.set('views', path.join(__dirname, 'resources/views'));
app.set('views')
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})