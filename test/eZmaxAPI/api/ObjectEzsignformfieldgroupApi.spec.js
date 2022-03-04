/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.7
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
    factory(root.expect, root.EZmaxApiDefinition);
  }
}(this, function(expect, EZmaxApiDefinition) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EZmaxApiDefinition.ObjectEzsignformfieldgroupApi();
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

  describe('ObjectEzsignformfieldgroupApi', function() {
    describe('ezsignformfieldgroupCreateObjectV1', function() {
      it('should call ezsignformfieldgroupCreateObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignformfieldgroupCreateObjectV1
        //instance.ezsignformfieldgroupCreateObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignformfieldgroupDeleteObjectV1', function() {
      it('should call ezsignformfieldgroupDeleteObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignformfieldgroupDeleteObjectV1
        //instance.ezsignformfieldgroupDeleteObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignformfieldgroupEditObjectV1', function() {
      it('should call ezsignformfieldgroupEditObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignformfieldgroupEditObjectV1
        //instance.ezsignformfieldgroupEditObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignformfieldgroupGetObjectV1', function() {
      it('should call ezsignformfieldgroupGetObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignformfieldgroupGetObjectV1
        //instance.ezsignformfieldgroupGetObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
