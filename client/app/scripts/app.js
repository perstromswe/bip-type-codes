'use strict';

angular.module('clientApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
  //'clientApp.services'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/about.html'
      })
      .state('info', {
        url: '/info',
        templateUrl: 'views/docs.html'
      })
      .state('properties', {
        url: '/egenskaper',
        resolve: {
          properties: ['MultiPropertiesLoader', function (MultiPropertiesLoader) {
            return new MultiPropertiesLoader();
          }]
        },
        templateUrl: 'views/properties.html',
        controller: 'PropertyCtrl'
      })
      .state('types', {
        url: '/beteckningar',
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
      .state('contact', {
        url: '/kontakt',
        templateUrl: 'views/contact.html'
      });
  });