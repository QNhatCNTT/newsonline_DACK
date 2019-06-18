
var express = require('express');
var exphbs = require('express-handlebars');
var morgan = require('morgan');
//var path = require('path')


var app = express();

app.use(require('./middlewares/locals.mdw'));
app.use(express.static(__dirname + '/public'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('hbs', exphbs({
  defaultLayout: 'main.hbs',
  layoutsDir:'views/layouts'
  
}));
app.set('view engine', 'hbs');

//app.use(require('./middlewares/locals.mdw'));

app.get('/',require('./routes/home/home.route'));
//var cRouter = require('./routes/page/categories.route');
app.use('/categories',require('./routes/page/categories.route'));
//app.use('/post',require('./routes/page/posts.route'));


//app.use('/admin/categories', require('./routes/admin/category.route'));

app.listen(3000, () => {
  console.log('Web Server is running at http://localhost:3000');
})