'use strict';

describe('Controller: PropertyCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var PropertyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PropertyCtrl = $controller('PropertyCtrl', {
      $scope: scope,
      properties: [{id:1}, {id:2}, {id:3}]
    });
  }));

});
