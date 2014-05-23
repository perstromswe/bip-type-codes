'use strict';

angular.module('clientApp')
  .controller('PropertyCtrl', function ($scope, properties) {
    $scope.properties = properties;

    $scope.isTrue = function(value){
      return value;
    };

    $scope.sort = '';
    $scope.reverse = false;

    $scope.isOrderActive = function(sort, reverse){
      return sort  === $scope.sort && reverse === $scope.reverse;
    };
  });
