/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.3
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
    instance = new EZmaxApiDefinition.CommonResponseObjDebugPayload();
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

  describe('CommonResponseObjDebugPayload', function() {
    it('should create an instance of CommonResponseObjDebugPayload', function() {
      // uncomment below and update the code to test CommonResponseObjDebugPayload
      //var instance = new EZmaxApiDefinition.CommonResponseObjDebugPayload();
      //expect(instance).to.be.a(EZmaxApiDefinition.CommonResponseObjDebugPayload);
    });

    it('should have the property iVersionMin (base name: "iVersionMin")', function() {
      // uncomment below and update the code to test the property iVersionMin
      //var instance = new EZmaxApiDefinition.CommonResponseObjDebugPayload();
      //expect(instance).to.be();
    });

    it('should have the property iVersionMax (base name: "iVersionMax")', function() {
      // uncomment below and update the code to test the property iVersionMax
      //var instance = new EZmaxApiDefinition.CommonResponseObjDebugPayload();
      //expect(instance).to.be();
    });

    it('should have the property a_RequiredPermission (base name: "a_RequiredPermission")', function() {
      // uncomment below and update the code to test the property a_RequiredPermission
      //var instance = new EZmaxApiDefinition.CommonResponseObjDebugPayload();
      //expect(instance).to.be();
    });

  });

}));
