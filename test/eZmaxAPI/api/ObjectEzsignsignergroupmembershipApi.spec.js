/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.2.0
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
    instance = new EZmaxApiDefinitionFull.ObjectEzsignsignergroupmembershipApi();
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

  describe('ObjectEzsignsignergroupmembershipApi', function() {
    describe('ezsignsignergroupmembershipCreateObjectV1', function() {
      it('should call ezsignsignergroupmembershipCreateObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignsignergroupmembershipCreateObjectV1
        //instance.ezsignsignergroupmembershipCreateObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignsignergroupmembershipDeleteObjectV1', function() {
      it('should call ezsignsignergroupmembershipDeleteObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignsignergroupmembershipDeleteObjectV1
        //instance.ezsignsignergroupmembershipDeleteObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignsignergroupmembershipGetObjectV2', function() {
      it('should call ezsignsignergroupmembershipGetObjectV2 successfully', function(done) {
        //uncomment below and update the code to test ezsignsignergroupmembershipGetObjectV2
        //instance.ezsignsignergroupmembershipGetObjectV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
