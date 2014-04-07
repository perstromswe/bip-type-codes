'use strict';

angular.module('clientApp')
  .factory('services', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  })
  .factory('Code', function($resource) {
      return $resource('/bip/api/allCategories');
    })
  .factory('MultiCodesLoader', function (Code, $q) {
      return function () {
        var delay = $q.defer();
        Code.query(function (code) {
          delay.resolve(code);
        }, function () {
          delay.reject('Unable to fetch codes');
        });
        return delay.promise;
      };
    }
  )
  .factory('Schema', function($resource) {
      return $resource('/bip/api/schema');
    })
  .factory('MultiSchemaLoader', function (Schema, $q) {
      return function () {
        var delay = $q.defer();
        Schema.query(function (schema) {
          delay.resolve(schema);
        }, function () {
          delay.reject('Unable to fetch schemas');
        });
        return delay.promise;
      };
    }
  )
  .factory('MainCategory', function($resource) {
      return $resource('/bip/api/maincategory');
    })
  .factory('MultiMainCategoryLoader', function (MainCategory, $q) {
      return function () {
        var delay = $q.defer();
        MainCategory.query(function (maincategory) {
          delay.resolve(maincategory);
        }, function () {
          delay.reject('Unable to fetch maincategories');
        });
        return delay.promise;
      };
    }
  )
  .factory('SubCategory', function($resource) {
      return $resource('/bip/api/subcategory');
    })
  .factory('MultiSubCategoryLoader', function (SubCategory, $q) {
      return function () {
        var delay = $q.defer();
        SubCategory.query(function (subCategory) {
          delay.resolve(subCategory);
        }, function () {
          delay.reject('Unable to fetch subcategories');
        });
        return delay.promise;
      };
    }
  );
