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
    instance = new EZmaxApiDefinitionFull.ObjectBillingentityinternalApi();
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

  describe('ObjectBillingentityinternalApi', function() {
    describe('billingentityinternalCreateObjectV1', function() {
      it('should call billingentityinternalCreateObjectV1 successfully', function(done) {
        //uncomment below and update the code to test billingentityinternalCreateObjectV1
        //instance.billingentityinternalCreateObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('billingentityinternalEditObjectV1', function() {
      it('should call billingentityinternalEditObjectV1 successfully', function(done) {
        //uncomment below and update the code to test billingentityinternalEditObjectV1
        //instance.billingentityinternalEditObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('billingentityinternalGetAutocompleteV2', function() {
      it('should call billingentityinternalGetAutocompleteV2 successfully', function(done) {
        //uncomment below and update the code to test billingentityinternalGetAutocompleteV2
        //instance.billingentityinternalGetAutocompleteV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('billingentityinternalGetListV1', function() {
      it('should call billingentityinternalGetListV1 successfully', function(done) {
        //uncomment below and update the code to test billingentityinternalGetListV1
        //instance.billingentityinternalGetListV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('billingentityinternalGetObjectV2', function() {
      it('should call billingentityinternalGetObjectV2 successfully', function(done) {
        //uncomment below and update the code to test billingentityinternalGetObjectV2
        //instance.billingentityinternalGetObjectV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
