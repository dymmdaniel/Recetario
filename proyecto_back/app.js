var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var database = require("./config/database");

var menuRouter = require('./routes/Menu.routes');
var recetaRouter = require('./routes/Receta.routes');
var usuarioRouter = require('./routes/Usuario.routes');
var indexRouter = require('./routes/Index.routes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//mongo connect
database.mongoConnect();

// Rutas
//app.use('/',indexRouter);
//app.use('/menu',menuRouter);
app.use('/usuario', usuarioRouter);
//app.use('/receta', recetaRouter);

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

//Configuracion server basico
app.set('port', process.env.PORT || 4000);

//Iniciar Server
app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto: ${app.get('port')}`);
});

module.exports = app;
