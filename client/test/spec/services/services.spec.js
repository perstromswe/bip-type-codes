'use strict';


describe('Service: MultiPropertiesLoader', function(){

  beforeEach(module('clientApp'));

  var MultiPropertiesLoader,
    mockBackend,
    property;

  beforeEach(inject(function (_$httpBackend_, Property, _MultiPropertiesLoader_) {
    MultiPropertiesLoader = _MultiPropertiesLoader_;
    mockBackend = _$httpBackend_;
    property = Property;
  }));

  it('should do a get /bip/api/property', function(){
    mockBackend.expectGET('/bip/api/property').respond([{id:5}]);

    var properties;

    var promise = new MultiPropertiesLoader();
    promise.then(function(res){
      properties = res;
    });

    expect(properties).toBeUndefined();

    mockBackend.flush();

    expect(properties).toMatch([{id:5}]);
  });

});
