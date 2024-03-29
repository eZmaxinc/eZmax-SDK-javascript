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
    instance = new EZmaxApiDefinitionFull.ObjectUserApi();
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

  describe('ObjectUserApi', function() {
    describe('userCreateObjectV1', function() {
      it('should call userCreateObjectV1 successfully', function(done) {
        //uncomment below and update the code to test userCreateObjectV1
        //instance.userCreateObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userEditObjectV1', function() {
      it('should call userEditObjectV1 successfully', function(done) {
        //uncomment below and update the code to test userEditObjectV1
        //instance.userEditObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userEditPermissionsV1', function() {
      it('should call userEditPermissionsV1 successfully', function(done) {
        //uncomment below and update the code to test userEditPermissionsV1
        //instance.userEditPermissionsV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userGetAutocompleteV2', function() {
      it('should call userGetAutocompleteV2 successfully', function(done) {
        //uncomment below and update the code to test userGetAutocompleteV2
        //instance.userGetAutocompleteV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userGetEffectivePermissionsV1', function() {
      it('should call userGetEffectivePermissionsV1 successfully', function(done) {
        //uncomment below and update the code to test userGetEffectivePermissionsV1
        //instance.userGetEffectivePermissionsV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userGetListV1', function() {
      it('should call userGetListV1 successfully', function(done) {
        //uncomment below and update the code to test userGetListV1
        //instance.userGetListV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userGetObjectV2', function() {
      it('should call userGetObjectV2 successfully', function(done) {
        //uncomment below and update the code to test userGetObjectV2
        //instance.userGetObjectV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userGetPermissionsV1', function() {
      it('should call userGetPermissionsV1 successfully', function(done) {
        //uncomment below and update the code to test userGetPermissionsV1
        //instance.userGetPermissionsV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userGetSubnetsV1', function() {
      it('should call userGetSubnetsV1 successfully', function(done) {
        //uncomment below and update the code to test userGetSubnetsV1
        //instance.userGetSubnetsV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
