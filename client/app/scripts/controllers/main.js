'use strict';

angular.module('clientApp')
  .controller('MainCtrl', function ($scope, $location) {
    $location.path('/typecodes');
  });
