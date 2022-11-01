/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.14
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/eZmaxAPI/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/eZmaxAPI/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EZmaxApiDefinitionFull);
  }
}(this, function(expect, EZmaxApiDefinitionFull) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EZmaxApiDefinitionFull.ObjectEzsigntemplatepackageApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ObjectEzsigntemplatepackageApi', function() {
    describe('ezsigntemplatepackageCreateObjectV1', function() {
      it('should call ezsigntemplatepackageCreateObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatepackageCreateObjectV1
        //instance.ezsigntemplatepackageCreateObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatepackageDeleteObjectV1', function() {
      it('should call ezsigntemplatepackageDeleteObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatepackageDeleteObjectV1
        //instance.ezsigntemplatepackageDeleteObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatepackageEditEzsigntemplatepackagesignersV1', function() {
      it('should call ezsigntemplatepackageEditEzsigntemplatepackagesignersV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatepackageEditEzsigntemplatepackagesignersV1
        //instance.ezsigntemplatepackageEditEzsigntemplatepackagesignersV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatepackageEditObjectV1', function() {
      it('should call ezsigntemplatepackageEditObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatepackageEditObjectV1
        //instance.ezsigntemplatepackageEditObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatepackageGetAutocompleteV1', function() {
      it('should call ezsigntemplatepackageGetAutocompleteV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatepackageGetAutocompleteV1
        //instance.ezsigntemplatepackageGetAutocompleteV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatepackageGetAutocompleteV2', function() {
      it('should call ezsigntemplatepackageGetAutocompleteV2 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatepackageGetAutocompleteV2
        //instance.ezsigntemplatepackageGetAutocompleteV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatepackageGetListV1', function() {
      it('should call ezsigntemplatepackageGetListV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatepackageGetListV1
        //instance.ezsigntemplatepackageGetListV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatepackageGetObjectV1', function() {
      it('should call ezsigntemplatepackageGetObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatepackageGetObjectV1
        //instance.ezsigntemplatepackageGetObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatepackageGetObjectV2', function() {
      it('should call ezsigntemplatepackageGetObjectV2 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatepackageGetObjectV2
        //instance.ezsigntemplatepackageGetObjectV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
