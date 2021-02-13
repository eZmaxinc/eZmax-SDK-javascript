/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.
 *
 * The version of the OpenAPI document: 1.0.30
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
    instance = new EZmaxApiDefinition.ObjectEzsignsignatureApi();
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

  describe('ObjectEzsignsignatureApi', function() {
    describe('ezsignsignatureCreateObjectV1', function() {
      it('should call ezsignsignatureCreateObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignsignatureCreateObjectV1
        //instance.ezsignsignatureCreateObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignsignatureDeleteObjectV1', function() {
      it('should call ezsignsignatureDeleteObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignsignatureDeleteObjectV1
        //instance.ezsignsignatureDeleteObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignsignatureEditObjectV1', function() {
      it('should call ezsignsignatureEditObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignsignatureEditObjectV1
        //instance.ezsignsignatureEditObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignsignatureGetChildrenV1', function() {
      it('should call ezsignsignatureGetChildrenV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignsignatureGetChildrenV1
        //instance.ezsignsignatureGetChildrenV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignsignatureGetObjectV1', function() {
      it('should call ezsignsignatureGetObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignsignatureGetObjectV1
        //instance.ezsignsignatureGetObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));