/**
 * Created by perstrom on 2014-04-03.
 * Description: API tests
 */

var should = require('should'),
  assert = require('assert'),
  request = require('supertest'),
  config = require('config'),
  pg = require('pg');

describe('Routing -->', function () {

  var url = 'http://localhost:3002';

  describe('Schema routing', function () {
    it('should return 200 OK on GET /bip/api/schema', function (done) {
      request(url).get('/bip/api/schema').end(function (err, res) {
        should.not.exist(err);
        res.should.have.status('200');
        done();
      });
    });
  });

  describe('Property routing', function(){
    it('should return 200 OK on GET /bip/api/properties', function(done){
      request(url).get('/bip/api/properties')
        .expect(200, done);
    });
  })
});
