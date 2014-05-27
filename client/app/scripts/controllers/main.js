'use strict';

angular.module('clientApp')
  .controller('MainCtrl', function ($scope, $location, $state) {
    $scope.isActive = function(view){
      var isActive = false;
      angular.forEach($state.current.name.split('.'), function (value) {
        if(value === view){
          isActive = true;
        }
      });
      return isActive;
    };
  });