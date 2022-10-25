/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.11
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
    instance = new EZmaxApiDefinitionFull.CustomAutocompleteElementDisabledResponse();
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

  describe('CustomAutocompleteElementDisabledResponse', function() {
    it('should create an instance of CustomAutocompleteElementDisabledResponse', function() {
      // uncomment below and update the code to test CustomAutocompleteElementDisabledResponse
      //var instance = new EZmaxApiDefinitionFull.CustomAutocompleteElementDisabledResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.CustomAutocompleteElementDisabledResponse);
    });

    it('should have the property bDisabled (base name: "bDisabled")', function() {
      // uncomment below and update the code to test the property bDisabled
      //var instance = new EZmaxApiDefinitionFull.CustomAutocompleteElementDisabledResponse();
      //expect(instance).to.be();
    });

    it('should have the property sCategory (base name: "sCategory")', function() {
      // uncomment below and update the code to test the property sCategory
      //var instance = new EZmaxApiDefinitionFull.CustomAutocompleteElementDisabledResponse();
      //expect(instance).to.be();
    });

    it('should have the property sLabel (base name: "sLabel")', function() {
      // uncomment below and update the code to test the property sLabel
      //var instance = new EZmaxApiDefinitionFull.CustomAutocompleteElementDisabledResponse();
      //expect(instance).to.be();
    });

    it('should have the property sValue (base name: "sValue")', function() {
      // uncomment below and update the code to test the property sValue
      //var instance = new EZmaxApiDefinitionFull.CustomAutocompleteElementDisabledResponse();
      //expect(instance).to.be();
    });

    it('should have the property mValue (base name: "mValue")', function() {
      // uncomment below and update the code to test the property mValue
      //var instance = new EZmaxApiDefinitionFull.CustomAutocompleteElementDisabledResponse();
      //expect(instance).to.be();
    });

    it('should have the property bActive (base name: "bActive")', function() {
      // uncomment below and update the code to test the property bActive
      //var instance = new EZmaxApiDefinitionFull.CustomAutocompleteElementDisabledResponse();
      //expect(instance).to.be();
    });

  });

}));
