/**
 * Created by perstromswe on 2014-04-02
 * Description: The main file of code to start with
 */

var express = require('express'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path'),
  fs = require('fs');

var server = express();

var expressLogFile = fs.createWriteStream('express.log', {flags: 'a'});

server.use(express.logger({stream: expressLogFile}));
server.use(express.logger('dev'));
server.use(express.methodOverride());
server.use(express.bodyParser({
  keepExtensions: true,
  uploadDir: __dirname + '/uploads/tmp/'
}));

process.on('uncaughtException', function (error) {
  console.log(error.stack);
});

function routesSetup(server) {
  server.get('/bip/api/allCategories', api.allCategories);

  server.get('/bip/api/schema', api.schema);
  server.get('/bip/api/maincategory', api.maincategory);
  server.get('/bip/api/subcategory', api.subcategory);
  server.get('*', api.notFound);
}

function start() {
  routesSetup(server);
  server.listen(3002);
  console.log('app server up and running on 127.0.0.1:3002');
}

exports.start = start;
exports.server = server;