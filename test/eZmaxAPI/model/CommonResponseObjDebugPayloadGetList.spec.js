/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.12
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
    instance = new EZmaxApiDefinitionFull.CommonResponseObjDebugPayloadGetList();
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

  describe('CommonResponseObjDebugPayloadGetList', function() {
    it('should create an instance of CommonResponseObjDebugPayloadGetList', function() {
      // uncomment below and update the code to test CommonResponseObjDebugPayloadGetList
      //var instance = new EZmaxApiDefinitionFull.CommonResponseObjDebugPayloadGetList();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.CommonResponseObjDebugPayloadGetList);
    });

    it('should have the property iVersionMin (base name: "iVersionMin")', function() {
      // uncomment below and update the code to test the property iVersionMin
      //var instance = new EZmaxApiDefinitionFull.CommonResponseObjDebugPayloadGetList();
      //expect(instance).to.be();
    });

    it('should have the property iVersionMax (base name: "iVersionMax")', function() {
      // uncomment below and update the code to test the property iVersionMax
      //var instance = new EZmaxApiDefinitionFull.CommonResponseObjDebugPayloadGetList();
      //expect(instance).to.be();
    });

    it('should have the property a_RequiredPermission (base name: "a_RequiredPermission")', function() {
      // uncomment below and update the code to test the property a_RequiredPermission
      //var instance = new EZmaxApiDefinitionFull.CommonResponseObjDebugPayloadGetList();
      //expect(instance).to.be();
    });

    it('should have the property a_Filter (base name: "a_Filter")', function() {
      // uncomment below and update the code to test the property a_Filter
      //var instance = new EZmaxApiDefinitionFull.CommonResponseObjDebugPayloadGetList();
      //expect(instance).to.be();
    });

    it('should have the property a_OrderBy (base name: "a_OrderBy")', function() {
      // uncomment below and update the code to test the property a_OrderBy
      //var instance = new EZmaxApiDefinitionFull.CommonResponseObjDebugPayloadGetList();
      //expect(instance).to.be();
    });

  });

}));
