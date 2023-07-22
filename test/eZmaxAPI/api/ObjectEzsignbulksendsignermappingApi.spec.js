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
    instance = new EZmaxApiDefinitionFull.ObjectEzsignbulksendsignermappingApi();
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

  describe('ObjectEzsignbulksendsignermappingApi', function() {
    describe('ezsignbulksendsignermappingCreateObjectV1', function() {
      it('should call ezsignbulksendsignermappingCreateObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignbulksendsignermappingCreateObjectV1
        //instance.ezsignbulksendsignermappingCreateObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignbulksendsignermappingDeleteObjectV1', function() {
      it('should call ezsignbulksendsignermappingDeleteObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignbulksendsignermappingDeleteObjectV1
        //instance.ezsignbulksendsignermappingDeleteObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignbulksendsignermappingGetObjectV2', function() {
      it('should call ezsignbulksendsignermappingGetObjectV2 successfully', function(done) {
        //uncomment below and update the code to test ezsignbulksendsignermappingGetObjectV2
        //instance.ezsignbulksendsignermappingGetObjectV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
