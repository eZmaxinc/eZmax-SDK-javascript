/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.10
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
    instance = new EZmaxApiDefinitionFull.ObjectEzsigntemplateApi();
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

  describe('ObjectEzsigntemplateApi', function() {
    describe('ezsigntemplateCreateObjectV1', function() {
      it('should call ezsigntemplateCreateObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplateCreateObjectV1
        //instance.ezsigntemplateCreateObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplateDeleteObjectV1', function() {
      it('should call ezsigntemplateDeleteObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplateDeleteObjectV1
        //instance.ezsigntemplateDeleteObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplateEditObjectV1', function() {
      it('should call ezsigntemplateEditObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplateEditObjectV1
        //instance.ezsigntemplateEditObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplateGetAutocompleteV1', function() {
      it('should call ezsigntemplateGetAutocompleteV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplateGetAutocompleteV1
        //instance.ezsigntemplateGetAutocompleteV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplateGetListV1', function() {
      it('should call ezsigntemplateGetListV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplateGetListV1
        //instance.ezsigntemplateGetListV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplateGetObjectV1', function() {
      it('should call ezsigntemplateGetObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplateGetObjectV1
        //instance.ezsigntemplateGetObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
