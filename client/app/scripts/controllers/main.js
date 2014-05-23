'use strict';

angular.module('clientApp')
  .controller('MainCtrl', function ($scope, $location, $state) {

    $scope.isActive = function(view){
      return $state.current.url === view;
    };
  });