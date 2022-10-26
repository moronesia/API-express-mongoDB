require('dotenv').config()
require('./config/mongoose');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = process.env.PORT || 3005;


var indexRouter = require('./routes/index');

// var productsV1Router = require('./routes/products_v1');
// var productsV2Router = require('./routes/products_v2');
const productsRouterV3 = require('./routes/product_v3/route')
const productsRouterV4 = require('./routes/product_v4/route')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// app.use('/api/v1/products', productsV1Router);
// app.use('/api/v2/products', productsV2Router);
app.use('/api/v3/products', productsRouterV3);
app.use('/api/v4/products', productsRouterV4);


app.listen(port, () => {
    console.log("server at http://localhost:3005")
})
module.exports = app;
