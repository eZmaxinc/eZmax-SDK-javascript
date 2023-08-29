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
    instance = new EZmaxApiDefinitionFull.ObjectUsergroupdelegationApi();
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

  describe('ObjectUsergroupdelegationApi', function() {
    describe('usergroupdelegationCreateObjectV1', function() {
      it('should call usergroupdelegationCreateObjectV1 successfully', function(done) {
        //uncomment below and update the code to test usergroupdelegationCreateObjectV1
        //instance.usergroupdelegationCreateObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usergroupdelegationDeleteObjectV1', function() {
      it('should call usergroupdelegationDeleteObjectV1 successfully', function(done) {
        //uncomment below and update the code to test usergroupdelegationDeleteObjectV1
        //instance.usergroupdelegationDeleteObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usergroupdelegationEditObjectV1', function() {
      it('should call usergroupdelegationEditObjectV1 successfully', function(done) {
        //uncomment below and update the code to test usergroupdelegationEditObjectV1
        //instance.usergroupdelegationEditObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usergroupdelegationGetObjectV2', function() {
      it('should call usergroupdelegationGetObjectV2 successfully', function(done) {
        //uncomment below and update the code to test usergroupdelegationGetObjectV2
        //instance.usergroupdelegationGetObjectV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
