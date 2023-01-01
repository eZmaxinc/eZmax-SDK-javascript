/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.17
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
    instance = new EZmaxApiDefinitionFull.ObjectEzsigntemplatesignerApi();
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

  describe('ObjectEzsigntemplatesignerApi', function() {
    describe('ezsigntemplatesignerCreateObjectV1', function() {
      it('should call ezsigntemplatesignerCreateObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatesignerCreateObjectV1
        //instance.ezsigntemplatesignerCreateObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatesignerDeleteObjectV1', function() {
      it('should call ezsigntemplatesignerDeleteObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatesignerDeleteObjectV1
        //instance.ezsigntemplatesignerDeleteObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatesignerEditObjectV1', function() {
      it('should call ezsigntemplatesignerEditObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatesignerEditObjectV1
        //instance.ezsigntemplatesignerEditObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatesignerGetObjectV1', function() {
      it('should call ezsigntemplatesignerGetObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatesignerGetObjectV1
        //instance.ezsigntemplatesignerGetObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatesignerGetObjectV2', function() {
      it('should call ezsigntemplatesignerGetObjectV2 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatesignerGetObjectV2
        //instance.ezsigntemplatesignerGetObjectV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
