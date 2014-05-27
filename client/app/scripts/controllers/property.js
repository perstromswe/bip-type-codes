'use strict';

angular.module('clientApp')
  .controller('PropertyCtrl', function ($scope, $location, $state, properties) {
    $scope.properties = properties;

    $scope.isTrue = function(value){
      return value;
    };

    $scope.sort = 'prop_title';
    $scope.reverse = false;

    $scope.isOrderActive = function(sort, reverse){
      return sort  === $scope.sort && reverse === $scope.reverse;
    };

    $scope.radioModel = $state.current.url;

  });
