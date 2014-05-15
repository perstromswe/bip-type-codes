'use strict';

angular.module('clientApp')
  .controller('MainCtrl', function ($scope, $location, $state) {

    $scope.isActive = function(view){

      if($state.current.url === view){
        return true;
      }else{
        return false;
      }
    };

    $scope.awesomeThings = [1,2,3];

  });