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
    instance = new EZmaxApiDefinitionFull.ObjectApikeyApi();
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

  describe('ObjectApikeyApi', function() {
    describe('apikeyCreateObjectV2', function() {
      it('should call apikeyCreateObjectV2 successfully', function(done) {
        //uncomment below and update the code to test apikeyCreateObjectV2
        //instance.apikeyCreateObjectV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apikeyEditObjectV1', function() {
      it('should call apikeyEditObjectV1 successfully', function(done) {
        //uncomment below and update the code to test apikeyEditObjectV1
        //instance.apikeyEditObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apikeyEditPermissionsV1', function() {
      it('should call apikeyEditPermissionsV1 successfully', function(done) {
        //uncomment below and update the code to test apikeyEditPermissionsV1
        //instance.apikeyEditPermissionsV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apikeyGetObjectV2', function() {
      it('should call apikeyGetObjectV2 successfully', function(done) {
        //uncomment below and update the code to test apikeyGetObjectV2
        //instance.apikeyGetObjectV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apikeyGetPermissionsV1', function() {
      it('should call apikeyGetPermissionsV1 successfully', function(done) {
        //uncomment below and update the code to test apikeyGetPermissionsV1
        //instance.apikeyGetPermissionsV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apikeyGetSubnetsV1', function() {
      it('should call apikeyGetSubnetsV1 successfully', function(done) {
        //uncomment below and update the code to test apikeyGetSubnetsV1
        //instance.apikeyGetSubnetsV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
