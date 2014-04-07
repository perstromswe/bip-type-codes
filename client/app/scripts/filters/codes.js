'use strict';

angular.module('clientApp')
  .filter('codesFilter', function ($filter) {
    return function (codes, schema, maincategory, subcategory, sorting) {

      var schemaActive,
        maincategoryActive,
        subcategoryActive;

      if(schema.sch_title === 'Alla'){

        schemaActive = false;
      }else{
        schemaActive = true;
      }

      if(maincategory.mc_title === 'Alla'){
        maincategoryActive = false;
      }else{
        maincategoryActive = true;
      }


      if(subcategory.sc_title === 'Alla'){

        subcategoryActive = false;
      }else{
        subcategoryActive = true;
      }


      var filterCodes = [];
      angular.forEach(codes, function(code){
        if(subcategoryActive){
          if(code.sc_id === subcategory.sc_id){
            this.push(code);
          }
        }else{
          if(maincategoryActive){
            if(code.mc_id === maincategory.mc_id){
              this.push(code);
            }
          }else{
            if(schemaActive){
              if(code.sch_id === schema.sch_id){
                this.push(code);
              }
            }else{
              this.push(code);
            }
          }
        }
      }, filterCodes);

      var order = $filter('orderBy')(filterCodes, sorting.property, sorting.reverse);

      return order;
    };
  })
  .filter('mainCatFilter', function(){
    return function (mainCategories, schemaId){
      var myFiltredCategories = [];

      angular.forEach(mainCategories, function(mainCategory){

        if(mainCategory.mc_schema === schemaId || mainCategory.mc_title === 'Alla'){
          this.push(mainCategory);
        }
      }, myFiltredCategories);

      return myFiltredCategories;
    };
  })
  .filter('subCatFilter', function(){
    return function(subcategories, maincategoryId){
      var myFiltredCategories = [];

      angular.forEach(subcategories, function(subCategory){
        if(subCategory.sc_maincategory === maincategoryId || subCategory.sc_title === 'Alla'){
          this.push(subCategory);
        }
      }, myFiltredCategories);

      return myFiltredCategories;
    };
  });
