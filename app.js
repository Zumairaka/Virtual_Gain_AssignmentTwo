var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors');
var Web3 = require('web3');

// web3 connection
web3 = new Web3( new Web3.providers.HttpProvider('http://localhost:8545'));
const MyContractJson = require(path.join(__dirname, '/Truffle/build/contracts/FundTransfer.json'));
const contractAddress = MyContractJson.networks['2353'].address;
const abi = MyContractJson.abi;

contract = new web3.eth.Contract(abi, contractAddress);
//web3 connection ends

var indexRouter = require('./routes/index');
var transferRouter = require('./routes/transfer');
var getBalanceRouter = require('./routes/getBalance');

var app = express();

//setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/transfer', transferRouter);
app.use('/getBalance', getBalanceRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});
  
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
