// Generated by CoffeeScript 1.6.3
(function() {
  var releasy, semver, should, steps;

  should = require('should');

  releasy = require('../releasy.js');

  steps = require('../libs/steps.js');

  semver = require('semver');

  describe('steps', function() {
    return it('should exist', function(done) {
      steps.should.be.ok;
      return done();
    });
  });

  describe('pkg.version', function() {
    return it('should not be promoted', function(done) {
      (function() {
        return steps.setup('package.json', 'promote', '');
      }).should["throw"]();
      return done();
    });
  });

  describe('releasy', function() {
    return it('should exist', function(done) {
      releasy.should.be.ok;
      return done();
    });
  });

}).call(this);

/*
//@ sourceMappingURL=test.map
*/
