/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.18
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
    instance = new EZmaxApiDefinitionFull.ObjectEzsignfoldertypeApi();
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

  describe('ObjectEzsignfoldertypeApi', function() {
    describe('ezsignfoldertypeCreateObjectV1', function() {
      it('should call ezsignfoldertypeCreateObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfoldertypeCreateObjectV1
        //instance.ezsignfoldertypeCreateObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignfoldertypeEditObjectV1', function() {
      it('should call ezsignfoldertypeEditObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfoldertypeEditObjectV1
        //instance.ezsignfoldertypeEditObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignfoldertypeGetAutocompleteV1', function() {
      it('should call ezsignfoldertypeGetAutocompleteV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfoldertypeGetAutocompleteV1
        //instance.ezsignfoldertypeGetAutocompleteV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignfoldertypeGetAutocompleteV2', function() {
      it('should call ezsignfoldertypeGetAutocompleteV2 successfully', function(done) {
        //uncomment below and update the code to test ezsignfoldertypeGetAutocompleteV2
        //instance.ezsignfoldertypeGetAutocompleteV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignfoldertypeGetListV1', function() {
      it('should call ezsignfoldertypeGetListV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfoldertypeGetListV1
        //instance.ezsignfoldertypeGetListV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignfoldertypeGetObjectV2', function() {
      it('should call ezsignfoldertypeGetObjectV2 successfully', function(done) {
        //uncomment below and update the code to test ezsignfoldertypeGetObjectV2
        //instance.ezsignfoldertypeGetObjectV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
