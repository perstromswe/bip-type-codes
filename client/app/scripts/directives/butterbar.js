'use strict';

angular.module('clientApp')
  .directive('butterbar', function ($rootScope) {
    return {
      link: function(scope, element) {
        element.addClass('hide');
        $rootScope.$on('$routeChangeStart', function() {
          element.removeClass('hide');
        });
        $rootScope.$on('$routeChangeSuccess', function() {
          element.addClass('hide');
        });
      }
    };
  });
