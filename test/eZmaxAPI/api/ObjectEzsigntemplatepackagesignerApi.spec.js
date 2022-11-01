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
    instance = new EZmaxApiDefinitionFull.ObjectEzsigntemplatepackagesignerApi();
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

  describe('ObjectEzsigntemplatepackagesignerApi', function() {
    describe('ezsigntemplatepackagesignerCreateObjectV1', function() {
      it('should call ezsigntemplatepackagesignerCreateObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatepackagesignerCreateObjectV1
        //instance.ezsigntemplatepackagesignerCreateObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatepackagesignerDeleteObjectV1', function() {
      it('should call ezsigntemplatepackagesignerDeleteObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatepackagesignerDeleteObjectV1
        //instance.ezsigntemplatepackagesignerDeleteObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatepackagesignerEditObjectV1', function() {
      it('should call ezsigntemplatepackagesignerEditObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatepackagesignerEditObjectV1
        //instance.ezsigntemplatepackagesignerEditObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatepackagesignerGetObjectV1', function() {
      it('should call ezsigntemplatepackagesignerGetObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatepackagesignerGetObjectV1
        //instance.ezsigntemplatepackagesignerGetObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatepackagesignerGetObjectV2', function() {
      it('should call ezsigntemplatepackagesignerGetObjectV2 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatepackagesignerGetObjectV2
        //instance.ezsigntemplatepackagesignerGetObjectV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
