/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.0
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
    instance = new EZmaxApiDefinition.FranchisereferalincomeRequestCompoundAllOf();
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

  describe('FranchisereferalincomeRequestCompoundAllOf', function() {
    it('should create an instance of FranchisereferalincomeRequestCompoundAllOf', function() {
      // uncomment below and update the code to test FranchisereferalincomeRequestCompoundAllOf
      //var instance = new EZmaxApiDefinition.FranchisereferalincomeRequestCompoundAllOf();
      //expect(instance).to.be.a(EZmaxApiDefinition.FranchisereferalincomeRequestCompoundAllOf);
    });

    it('should have the property objAddress (base name: "objAddress")', function() {
      // uncomment below and update the code to test the property objAddress
      //var instance = new EZmaxApiDefinition.FranchisereferalincomeRequestCompoundAllOf();
      //expect(instance).to.be();
    });

    it('should have the property a_objContact (base name: "a_objContact")', function() {
      // uncomment below and update the code to test the property a_objContact
      //var instance = new EZmaxApiDefinition.FranchisereferalincomeRequestCompoundAllOf();
      //expect(instance).to.be();
    });

  });

}));