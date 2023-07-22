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
    instance = new EZmaxApiDefinitionFull.PhoneResponseCompound();
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

  describe('PhoneResponseCompound', function() {
    it('should create an instance of PhoneResponseCompound', function() {
      // uncomment below and update the code to test PhoneResponseCompound
      //var instance = new EZmaxApiDefinitionFull.PhoneResponseCompound();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.PhoneResponseCompound);
    });

    it('should have the property pkiPhoneID (base name: "pkiPhoneID")', function() {
      // uncomment below and update the code to test the property pkiPhoneID
      //var instance = new EZmaxApiDefinitionFull.PhoneResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiPhonetypeID (base name: "fkiPhonetypeID")', function() {
      // uncomment below and update the code to test the property fkiPhonetypeID
      //var instance = new EZmaxApiDefinitionFull.PhoneResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property ePhoneType (base name: "ePhoneType")', function() {
      // uncomment below and update the code to test the property ePhoneType
      //var instance = new EZmaxApiDefinitionFull.PhoneResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sPhoneE164 (base name: "sPhoneE164")', function() {
      // uncomment below and update the code to test the property sPhoneE164
      //var instance = new EZmaxApiDefinitionFull.PhoneResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sPhoneExtension (base name: "sPhoneExtension")', function() {
      // uncomment below and update the code to test the property sPhoneExtension
      //var instance = new EZmaxApiDefinitionFull.PhoneResponseCompound();
      //expect(instance).to.be();
    });

  });

}));
