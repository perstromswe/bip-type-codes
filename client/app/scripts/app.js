'use strict';

angular.module('clientApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  //'clientApp.services'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/app');
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: '/',
        abstract:true,
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .state('home.types', {
        url: 'app',
        templateUrl: 'views/typecodes.html',
        resolve: {
          allCategories: ['MultiCodesLoader', function (MultiCodesLoader) {
            return new MultiCodesLoader();
          }],
          schemas: ['MultiSchemaLoader', function (MultiSchemaLoader) {
            return new MultiSchemaLoader();
          }],
          maincategories: ['MultiMainCategoryLoader', function (MultiMainCategoryLoader) {
            return new MultiMainCategoryLoader();
          }],
          subcategories: ['MultiSubCategoryLoader', function (MultiSubCategoryLoader) {
            return new MultiSubCategoryLoader();
          }]
        },
        controller: 'TypeCtrl'
      })
      .state('home.about', {
        url: 'about',
        templateUrl: 'views/about.html'
      })
      .state('home.contact', {
        url: 'contact',
        templateUrl: 'views/contact.html'
      });
  });