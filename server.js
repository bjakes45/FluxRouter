// Babel ES6/JSX Compiler
require('babel-register');

var swig      = require('swig');
var React     = require('react');
var ReactDOM  = require('react-dom/server');
var Router    = require('react-router');
var routes    = require('./app/routes');

var express   = require('express');
var path      = require('path');
var logger    = require('morgan');
var bodyParser = require('body-parser');

var passport  = require('passport');
var flash    = require('connect-flash');
var cookieParser = require('cookie-parser');
var session   = require('express-session');

var async     = require('async');
var request   = require('request');
var xml2js    = require('xml2js');

var mongoose  = require('mongoose');
var plucode   = require('./models/plucode');
var Item      = require('./models/item');

var config    = require('./config');

var app = express();


app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

require('./passport')(passport);
app.use(session({ resave: false, saveUninitialized: true, secret: 'connectsharesave' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

app.get('/api/items/count', function(req, res, next) {
  plucode.count({}, function(err, count) {
    if (err) return next(err);
    res.send({ count: count });
  });
});

app.post('/api/items', function(req, res, next) {
  var upc = req.body.upc;
  var itemName = req.body.name;
  var manu = req.body.manu;
  var size = req.body.size;
  
  Item.findOne({ upc: upc }, function(err, i) {
    if (err) return next(err);
    if (i) {
      return res.status(409).send({ message: "The UPC code " + i.upc + " is already associated with another product." });
    }
    var item = new Item({
      name: itemName,
      upc: upc,
      manu: manu,
      size: size,
    });
    item.save(function(err) {
      if (err) return next(err);
      res.send({ message: itemName + ' has been added successfully!' });
    });
  });
});

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
}

app.get('/verify', isLoggedIn, function(req, res) {
        res.redirect('/',{
            user : req.user // get the user out of session and pass to template
        });
    });

 app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

app.post('/signup', passport.authenticate('local-signup', {
  successRedirect : '/', // redirect to the secure profile section
  failureRedirect : '/login', // redirect back to the signup page if there is an error
  failureFlash : true // allow flash messages
}));

// process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});
/**
 * Socket.io stuff.
 */
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var onlineUsers = 0;

io.sockets.on('connection', function(socket) {
  onlineUsers++;
  io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

  socket.on('disconnect', function() {
    onlineUsers--;
    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
  });
});

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});