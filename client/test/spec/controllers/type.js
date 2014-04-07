'use strict';

describe('Controller: TypeCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var TypeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    //var mockBackend;
    scope = $rootScope.$new();
    TypeCtrl = $controller('TypeCtrl', {
      $scope: scope,
      codes: [1, 2, 3]
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.codes.length).toEqual(3);
  });
});
