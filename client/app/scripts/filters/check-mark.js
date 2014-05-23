'use strict';

angular.module('clientApp')
  .filter('checkMark', function () {
    return function (input) {
      var checkMark;
      if(input){
        checkMark = '<i class="fa fa-check"></i>';
      }else{
        checkMark = 6;
      }

      return input;
    };
  });
