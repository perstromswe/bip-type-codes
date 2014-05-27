'use strict';

angular.module('clientApp')
  .controller('TypeCtrl', function ($scope, schemas, maincategories, subcategories) {

    //Join the subcategories with schemas and maincategories
    var allCategories = [];
    angular.forEach(subcategories, function (subcategory) {
        var mainCategory = _.findWhere(maincategories, {mc_id:subcategory.sc_maincategory});
        var discipline  = _.findWhere(schemas, {sch_id:mainCategory.mc_schema});
        this.push({
          sc_title: subcategory.sc_title,
          sc_usercode_syntax: subcategory.sc_usercode_syntax,
          mc_title: mainCategory.mc_title,
          sch_title: discipline.sch_title,
          sc_code: subcategory.sc_code,
          sch_id:discipline.sch_id,
          mc_id: mainCategory.mc_id,
          sc_id : subcategory.sc_id
        });
      }, allCategories);

    $scope.allCategories = allCategories;


    $scope.schemas = _.toArray(schemas);
    $scope.schemas.unshift({sch_title:'Alla'});
    $scope.activeSchema = $scope.schemas[0];

    $scope.mainCategories = _.toArray(maincategories);
    $scope.mainCategories.unshift({mc_title:'Alla'});
    $scope.activeMainCategory = $scope.mainCategories[0];

    $scope.subCategories = _.toArray(subcategories);
    $scope.subCategories.unshift({sc_title:'Alla'});
    $scope.activeSubCategory = $scope.subCategories[0];

    $scope.schemaChangeFN = function(){
      $scope.activeMainCategory = $scope.mainCategories[0];
      $scope.activeSubCategory = $scope.subCategories[0];
    };

    $scope.mainCatChangeFN = function(){
      $scope.activeSubCategory = $scope.subCategories[0];
    };

    $scope.resetFilterFN = function(){
      $scope.activeSchema = $scope.schemas[0];
      $scope.activeMainCategory = $scope.mainCategories[0];
      $scope.activeSubCategory = $scope.subCategories[0];
    };

    $scope.activeSort = {
      property: 'sch_title',
      reverse: false
    };

    $scope.orderBy = function(property){
      $scope.activeSort = {
        property: property,
        reverse:!$scope.activeSort.reverse
      };
    };

    $scope.isOrderActive = function(property, reverse){
      if(property === $scope.activeSort.property && reverse === $scope.activeSort.reverse){
        return true;

      }else{
        return false;
      }
    };

    $scope.filter = {
      schema: false,
      mainCategory: false,
      subCategory: false
    };

    $scope.$watch('activeSchema', function(){
      if($scope.activeSchema.sch_title === 'Alla'){
        $scope.filter.schema = false;
      }else{
        $scope.filter.schema = true;
      }
    });

    $scope.$watch('activeMainCategory', function(){
      if($scope.activeMainCategory.mc_title === 'Alla'){
        $scope.filter.mainCategory = false;
      }else{
        $scope.filter.mainCategory = true;
      }
    });

    $scope.subCategoryActive = false;

    $scope.$watch('activeSubCategory', function(){
      if($scope.activeSubCategory.sc_title === 'Alla'){
        $scope.subCategoryActive = false;
      }else{
        $scope.subCategoryActive = true;
      }
    });
  });