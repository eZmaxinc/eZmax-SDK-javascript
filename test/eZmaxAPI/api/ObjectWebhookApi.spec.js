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
    instance = new EZmaxApiDefinitionFull.ObjectWebhookApi();
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

  describe('ObjectWebhookApi', function() {
    describe('webhookCreateObjectV1', function() {
      it('should call webhookCreateObjectV1 successfully', function(done) {
        //uncomment below and update the code to test webhookCreateObjectV1
        //instance.webhookCreateObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('webhookDeleteObjectV1', function() {
      it('should call webhookDeleteObjectV1 successfully', function(done) {
        //uncomment below and update the code to test webhookDeleteObjectV1
        //instance.webhookDeleteObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('webhookEditObjectV1', function() {
      it('should call webhookEditObjectV1 successfully', function(done) {
        //uncomment below and update the code to test webhookEditObjectV1
        //instance.webhookEditObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('webhookGetHistoryV1', function() {
      it('should call webhookGetHistoryV1 successfully', function(done) {
        //uncomment below and update the code to test webhookGetHistoryV1
        //instance.webhookGetHistoryV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('webhookGetListV1', function() {
      it('should call webhookGetListV1 successfully', function(done) {
        //uncomment below and update the code to test webhookGetListV1
        //instance.webhookGetListV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('webhookGetObjectV2', function() {
      it('should call webhookGetObjectV2 successfully', function(done) {
        //uncomment below and update the code to test webhookGetObjectV2
        //instance.webhookGetObjectV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('webhookTestV1', function() {
      it('should call webhookTestV1 successfully', function(done) {
        //uncomment below and update the code to test webhookTestV1
        //instance.webhookTestV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
