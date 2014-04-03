var pg = require('pg');

var Knex = require('knex');

Knex.knex = Knex.initialize({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'bip',
    password: 'postgres',
    database: 'bip',
    charset: 'utf8'
  }
});

var knex = require('knex').knex;

var sendResponse = function (response, data, status) {
  response.charset = 'UTF-8';
  var responseStatus = status || 200;
  response.json(responseStatus, data);
};

/*
 404 error.
 */
exports.notFound = function (req, res) {
  res.charset = 'UTF-8';
  res.status(404).end();
};


/**Project calls**/
/*
 GET /api/project/ HTTP/1.1
 */
exports.allCategories = function (inputs, callback) {
  var query = knex('subcategory')
    .join('maincategory', 'subcategory.sc_maincategory', '=', 'maincategory.mc_id')
    .join('schema', 'maincategory.mc_schema', '=', 'schema.sch_id')
    .select();

  query.exec(function (err, results) {
    if (err) {
      sendResponse(callback, err, 404);
      return console.error('error running query', err);
    }
    sendResponse(callback, results);
  });
};
